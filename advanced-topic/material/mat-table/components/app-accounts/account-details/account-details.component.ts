import * as _ from 'lodash';
import * as tableUtils from '../../../shared/reusable-components/material-table/table-maker';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs/tab-group';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Ng7MatBreadcrumbService } from "ng7-mat-breadcrumb";

import { ApiEndpoint } from '../../../services/apiendpoint.service';
import { AlertComponent } from '../../../shared/reusable-components/alert/alert.component';
import { MatDialogInputComponent } from '../../../shared/reusable-components/mat-dialog-input/mat-dialog-input.component';

import { IAccount, IHistoryLicense } from '../interfaces';
import { ITableFilter } from '../../../shared/reusable-components/material-table/interfaces';
import { IAlert } from '../../../shared/reusable-components/alert/interface';


@Component({
    selector: 'account-details',
    templateUrl: './account-details.component.html',
    styleUrls: ['./account-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountDetailsComponent implements OnInit, OnDestroy {
    public badge: string;
    public toggleLabel: string = '';
    public isSubmitted: boolean = false;

    public tabs: string[] = ['details', 'history'];
    public displayedColumns: string[] = [];
    public data: any[] = [];
    public dataSource: any[] = [];

    public tableFilter: ITableFilter = { isFiltering: false, keys: [] };
    public account = {} as IAccount;
    public accountEdited = {};
    private destroyed$: Subject<boolean> = new Subject();

    constructor(
        private ng7MatBreadcrumbService: Ng7MatBreadcrumbService,
        private service: ApiEndpoint,
        private cdr: ChangeDetectorRef,
        private dialog: MatDialog,
        private toastr: ToastrService,
        private location: Location,
    ) { }

    private saveData(key: string, data: any): void {
        const str = JSON.stringify(data);
        localStorage.setItem(key, str);
    }

    // DETAILS
    private getAccountDetails(): void {
        if (!localStorage.getItem('account')) {
            const data = history.state.data;
            const accountDetails = {} as IAccount;

            Object.keys(data).map(item => accountDetails[item] = data[item].value);
            this.account = accountDetails;
            this.saveData('account', accountDetails);
        } else {
            const fetchDataOnLS = localStorage.getItem('account');
            if (fetchDataOnLS) {
                this.account = JSON.parse(fetchDataOnLS);
            }
        }
    }

    public get daysLeft(): number {
        const { expiryDate } = this.account;
        const endDate: number = new Date(expiryDate).getTime();
        const today: number = new Date().getTime();
        const oneDay: number = 24 * 60 * 60 * 1000;

        let result: number = (endDate - today) / oneDay;
        result = Math.ceil(result);
        this.getBadgeClasses(result);

        return result;
    }

    private getBadgeClasses(daysLeft: number): void {
        let classes = 'badge ';

        if (daysLeft >= 60) {
            classes += 'badge-success';
        }
        if (daysLeft >= 30 && daysLeft < 60) {
            classes += 'badge-primary';
        }
        if (daysLeft < 30) {
            classes += 'badge-danger';
        }
        this.badge = classes;
    }

    private openDialog(value, name: string): void {
        const key = Object.keys(value);

        const payload = {
            value,
            maxlength: {
                isMax: key[0] === "licenseName" ? true : false,
                length: '70'
            }
        }


        this.dialog
            .open(MatDialogInputComponent, { height: '160px', width: '500px', data: payload })
            .afterClosed()
            .subscribe((newValue) => {
                if (newValue) {
                    this.accountEdited[name] = name === 'numberOfLicenses' ? +newValue[name] : newValue[name];
                    // updating the view
                    this.account[name] = this.accountEdited[name];
                    this.cdr.markForCheck();
                    this.saveData('account', this.account);
                }
            });
    }

    public setFormValue(element): void {
        const current = element as MatButton;
        const { name } = current._elementRef.nativeElement;
        this.saveData('currentInput', name);

        const value = {
            [name]: this.account[name]
        };
        this.openDialog(value, name);
    }

    private accountEdit(): void {
        const { region, accountId } = this.account;
        const endPoint = `api/accounts/${accountId}`;

        this.service
            .updateItem(region, endPoint, this.accountEdited)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((response) => {
                if (!response) {
                    this.toastr.success('Account Successfully Updated')
                    this.isSubmitted = true;
                }
            }, (error: Error) => {
                if (error) {
                    this.toastr.error('Oops! Somethig went wrong...');
                }
            });
    }

    public submit() {
        this.accountEdit();
    }

    public alertShow(): void {
        const input: IAlert = {
            className: 'warning',
            heading: 'Do you want to save the changes before leaving?',
            body: "Your changes will be lost if you don't save them.",
            buttons: [
                {
                    isVisible: true,
                    className: 'secondary',
                    label: "No",
                    method: () => {
                        this.location.back();
                    }
                },
                {
                    isVisible: true,
                    className: 'primary',
                    label: "Yes",
                    method: () => {
                        this.accountEdit();
                    }
                }
            ]
        }

        if (!_.isEmpty(this.accountEdited) && !this.isSubmitted) {
            this.dialog
                .open(AlertComponent, { panelClass: 'custom-dialog-container', data: input })
                .afterClosed()
        } else {
            this.location.back();
        }
    }


    // HISTORY
    private getHistory(): void {
        const { region, accountId } = this.account;
        const endPoint = `api/accounts/${accountId}/license/history`;

        this.service
            .getCollection(region, endPoint)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((response: IHistoryLicense[]) => {
                this.dataSource = this.changesExtractor(response);
                this.getKeys(this.dataSource);
            });
    }

    private changesExtractor(data: IHistoryLicense[]) {
        const history = [];
        data.forEach((el: IHistoryLicense) => {
            el.changes.forEach((item: string) => {
                let key = item.includes('Number') ? 'numberOfLicenses' : 'licenseName';
                el[key] = item;
                history.push(el);
            });
        });
        const lastItem: string = Object.keys(history[history.length - 1]).pop();
        const defaultKeys: string[] = Object.keys(history[0]);
        defaultKeys.push(lastItem);
        const res = tableUtils.createCell(defaultKeys, history, false);

        return res;
    }

    public handleSelection(tabChangeEvent: MatTabChangeEvent): void {
        const { textLabel } = tabChangeEvent.tab;
        if (textLabel === 'History') {
            this.getHistory();
        }
    }

    public getKeys(data): void {
        let col: string[] = Object.keys(data[0]);
        col = col.filter(string => string !== 'changes');
        this.displayedColumns = col;
        this.cdr.markForCheck();
    }

    public breadCrumbCustom(): void {
        const { licenseName } = this.account;
        const breadcrumb = { dynamicText: `${licenseName}` };
        this.ng7MatBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
    }

    public toggleStatus(): void {
        if (this.account.accountStatus === 'Active') {
            this.account.accountStatus = 'OnHold';
            this.toggleLabel = 'Activate';
        } else if (this.account.accountStatus === 'OnHold') {
            this.toggleLabel = 'Put On Hold';
            this.account.accountStatus = 'Active';
        }
    }

    public setToggleLable(): void {
        this.toggleLabel = this.account.accountStatus === 'Active' ? 'Put on hold' : 'Activate';
    }

    public ngOnInit(): void {
        this.getAccountDetails();
        this.breadCrumbCustom();
        this.setToggleLable();
    }

    public ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
        localStorage.removeItem('account');
        localStorage.removeItem('currentInput');
    }

}
