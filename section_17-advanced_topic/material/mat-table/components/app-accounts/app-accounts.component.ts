import * as _ from 'lodash';
import * as tableUtils from '../../shared/reusable-components/material-table/table-maker';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { ApiEndpoint } from "../../services/apiendpoint.service";
import { takeUntil } from 'rxjs/operators';
import { IAccount, INavigateTo } from "./interfaces";
import { ITableFilter, ICell, IBadgeClass } from "../../shared/reusable-components/material-table/interfaces";

@Component({
    selector: "app-accounts",
    templateUrl: "./app-accounts.component.html",
    styleUrls: ["./app-accounts.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppAccountsComponent implements OnInit, OnDestroy {

    public dataSource: ICell[] = [];
    public displayedColumns: string[] = [];

    public navigateToObjDetails: INavigateTo = { url: 'accounts', property: 'accountId' };
    public tableFilter: ITableFilter = { isFiltering: true, keys: ['licenseName', 'accountId', 'licenseType', 'accountStatus'] };

    private destroyed$: Subject<boolean> = new Subject();

    constructor(
        private cdr: ChangeDetectorRef,
        private service: ApiEndpoint,
    ) { }

    public getKeys(data): void {
        const first = "region";
        let col: string[] = Object.keys(data[0]);

        col = col.filter((string) => {
            if (string === 'assignedLicenses' || string === 'flagName') {
                return false
            }
            return true;
        });

        col.sort(function (x, y) {
            return x == first ? -1 : y == first ? 1 : 0;
        });

        this.displayedColumns = col;
        this.cdr.markForCheck();
    }

    public getAccounts(): void {
        const data: IAccount[] = [];

        this.service
            .getAll('api/accounts')
            .pipe(takeUntil(this.destroyed$))
            .subscribe((response) => {
                response.forEach((array: any[]) => {
                    array.forEach((element: IAccount) => {
                        data.push(element);
                    });
                });
                this.dataSource = tableUtils.createCell(Object.keys(data[0]), data, true, this.setCellProperty)
                this.cdr.markForCheck();
                this.getKeys(response[0]);
            });
    }

    public setCellProperty(tableCell, obj): void {
        const date = tableUtils.dateMaker(obj.lastUpdated);
        const time = tableUtils.timeMaker(new Date(obj.lastUpdated));
        const badgeClasses: IBadgeClass[] = [
            { name: 'Subscription', className: 'success' },
            { name: 'Trial', className: 'primary' },
            { name: 'ExtendedTrial', className: 'primary' },
            { name: 'ExpiredTrial', className: 'danger' },
            { name: 'ExpiredSubscription', className: 'danger' },
        ];
        
        tableCell.accountStatus.isValueShow = false;
        tableCell.accountStatus.isIconShow = true;
        tableCell.accountStatus.className = 'center';
        tableCell.accountStatus.icon = obj.accountStatus === 'Active' ? 'check_circle' : 'not_interested';

        tableCell.region.isValueShow = false;
        tableCell.region.className = `flag-icon flag-icon-${obj.flagName}`;

        tableCell.lastUpdated.value = `${date} - ${time}`;
        tableCell.numberOfLicenses.className = 'center';
        tableCell.licenseType.className = tableUtils.getBadgeClasses(obj, badgeClasses, 'licenseType');
    }

    public ngOnInit(): void {
        this.getAccounts();
    }

    public ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}


