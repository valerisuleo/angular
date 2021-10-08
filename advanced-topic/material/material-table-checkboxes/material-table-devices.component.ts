import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ApiEndpoint } from '../../../services/apiendpoint.service';
import { AppSettings } from '../../../services/settings.services';
import { TranslationService } from '../../../services/translation.service';

import { IDevice } from '../../../components/app-organisation/app-all-devices/interfaces';
import { IActions, ITableDevices } from './interface';

@Component({
    selector: 'material-table-devices',
    templateUrl: './material-table-devices.component.html',
    styleUrls: ['./material-table-devices.component.scss']
})
export class MaterialTableDevicesComponent implements OnChanges, OnDestroy {
    @Input() props: ITableDevices;
    @Output('handleDeleteItem') clickOnBin = new EventEmitter();
    @Output('handleConnectItem') clickOnShare = new EventEmitter();
    @Output('handleDeleteMulti') clickOnBulk = new EventEmitter();
    @Output('handleConnectBulk') clickOnBulkShare = new EventEmitter();
    @Output('handleCheckBoxFilter') clickOnFilter = new EventEmitter();
    @Output('handleRefresh') clickOnRefresh = new EventEmitter();

    @ViewChild("filter") filterInput: ElementRef;
    @ViewChild(MatSort) set matSort(ms: MatSort) {
        this.sort = ms;
        this.columnSort();
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        if (window.innerWidth < 960) {
            this.classDefaultLeft = 'col-md-12 col-lg-7';
            this.classDefaultRight = 'col-md-12 col-lg-5';
            this.classReverse = '';
        } else {
            this.classReverse = '-reverse';
            this.classDefaultLeft = 'col-md-6 col-lg-7';
            this.classDefaultRight = 'col-md-6 col-lg-5';
        }
    }

    private sort: MatSort;
    private destroyed$: Subject<boolean> = new Subject();
    public selection = new SelectionModel<any>(true, []);
    public dataSource: any;
    public settings: any;

    public isMasterChecked: boolean = false;
    public isRefresh: boolean = false;
    public isFilterVisible: boolean = false;
    public isLoading: boolean;
    public isVisibleBtnBulkAssing: boolean;
    public isCheckBoxVisible: boolean;
    public isChecked: boolean;

    public usa: string = "MMM dd yyyy, HH:mm";
    public uk: string = "dd MMM yyyy, HH:mm";
    public classResposiveLeft: string = 'col-lg-5';
    public classResponsiveRight: string = 'col-lg-7';
    public classDefaultLeft: string = 'col-md-6 col-lg-7';
    public classDefaultRight: string = 'col-md-6 col-lg-5';
    public classReverse: string = '-reverse';
    public key: string = 'app.devices.devices_field_';
    public organisationalldevices: string = 'app.organisation.organisationalldevices.organisationalldevices_';

    public clone: any[];
    public deviceSelected = [];
    public keys: string[] = [];

    constructor(
        private cdr: ChangeDetectorRef,
        private ts: TranslationService,
        public appSettings: AppSettings,
        public apiService: ApiEndpoint,
        private snackBar: MatSnackBar,
    ) { }

    public getAllDevices(devices?): void {
        this.isMasterChecked = false;
        this.deviceSelected = [];
        this.createTable(devices);
        this.versionChecker(devices);
    }

    public fresh(): void {
        this.clickOnRefresh.emit(true);
        this.deviceSelected = [];
        this.isMasterChecked = false;
    }

    public connectDevice(current: IActions): void {
        this.clickOnShare.emit({ current, data: this.dataSource.data });
    }

    public connectDeviceMulti(): void {
        const data = [...this.dataSource.data];
        const deviceIDList: string[] = this.deviceSelected.map(item => item.id);
        this.clickOnBulkShare.emit({ deviceIDList, data });
    }

    public deleteDevice(current: IActions): void {
        this.clickOnBin.emit({ current, data: this.dataSource.data });
    }

    public deleteDeviceMulti(): void {
        const data = [...this.dataSource.data];
        const deviceIDList: string[] = this.deviceSelected.map(item => item.id);
        this.clickOnBulk.emit({ deviceIDList, data });
    }

    public action(current: IActions): void {
        current.icon === 'delete' ? this.deleteDevice(current) : this.connectDevice(current);
    }

    private versionChecker(devices: IDevice[]): void {
        const message: string = this.ts.getTranslation(`${this.organisationalldevices}update_version_msg`);
        const isOutDated: boolean = devices.some((device: IDevice) => {
            return device.outOfDate;
        });

        if (isOutDated) {
            setTimeout(() => {
                this.snackBar.open(message, "X", {
                    duration: 5000,
                    verticalPosition: 'top',
                    horizontalPosition: 'center'
                })
            }, 1000);
        }
    }
    // ________________________________TABLE & FILTER________________________________
    private createTable(devices: any[]): void {
        this.dataSource = new TableVirtualScrollDataSource(devices);
        this.dataSource.filterPredicate = ((data, filter: string) => {
            return this.keys.some((key: string) => {
                if (data[key]) {
                    return JSON.stringify(data[key]).toLowerCase().includes(filter.toLowerCase());
                }
            })
        });
        this.clone = [...this.dataSource.data];
        this.cdr.markForCheck();
    }

    private columnSort(): void {
        if (this.dataSource) {
            // sorting nested obj...
            this.dataSource.sortingDataAccessor = (item, property) => {
                switch (property) {
                    case `${this.key}siteid`: return item[`${this.key}siteid`].label;
                    case `${this.key}devicegroup`: return item[`${this.key}devicegroup`].label;
                    case `${this.key}devicestate`: return item[`${this.key}devicestate`].label;
                    case `${this.key}version`: return item[`${this.key}version`].label;
                    default: return item[property];
                }
            };
            this.dataSource.sort = this.sort;
        }
    }

    public applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    public toggleFilter() {
        this.isFilterVisible = !this.isFilterVisible;
        if (this.isFilterVisible) {
            this.filterInput.nativeElement.focus();
            this.classResposiveLeft = 'col-lg-7 smooth';
            this.classResponsiveRight = window.innerWidth < 960 ? 'col-lg-5 smooth pt-3' : 'col-lg-5 smooth';
        } else {
            this.classResposiveLeft = 'col-lg-5 smooth';
            this.classResponsiveRight = window.innerWidth < 960 ? 'col-lg-7 smooth pt-3' : 'col-lg-7 smooth';
        }
    }

    public filterDevices(current: boolean): void {
        this.isChecked = current;
        this.clickOnFilter.emit({ current, data: this.clone })
    }
    // _______________________________CHECKBOX_______________________________
    public isAllSelected(): boolean {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    public masterToggle(): void {
        this.deviceSelected = [];
        this.isRefresh = false;
        this.isMasterChecked = !this.isMasterChecked;
        if (this.isMasterChecked) {
            this.clone.forEach(checkBox => this.selection.select(checkBox));
        } else {
            this.selection.clear();
        }
    }

    private handleCheckBoxes(): void {
        this.selection.changed
            .pipe(takeUntil(this.destroyed$))
            .subscribe((data) => {
                const { added, removed } = data;
                const { _value } = this.dataSource._data;
                if (added.length) {
                    this.selectItem(added, _value)
                }
                if (removed.length) {
                    this.unSelectItem(removed);
                }
                this.cdr.markForCheck();
            });
    }

    private selectItem(added, value): void {
        const current = added[0];
        if (this.isMasterChecked && this.dataSource.filter) {
            // select only filtered data
            this.deviceSelected = this.dataSource.filteredData;
        } else if (this.isMasterChecked) {
            this.deviceSelected = value;
        } else {
            this.deviceSelected.push(current);
        }
    }

    private unSelectItem(removed): void {
        this.isMasterChecked = false;
        const current = removed[0];
        const filter = this.deviceSelected.filter(item => item.id !== current.id);
        this.deviceSelected = filter;
    }
    // ____________________________LIFECYCLE HOOKS____________________________
    ngOnChanges(change: SimpleChanges) {
        const { currentValue, firstChange } = change.props;

        if (firstChange) {
            this.settings = currentValue.settings;
            this.isChecked = currentValue.isChecked;
            this.isLoading = currentValue.isLoading;
            this.handleCheckBoxes();

        } else {
            this.getAllDevices(currentValue.devices)
            this.keys = currentValue.displayedColumns;
            this.dataSource.data = currentValue.devices;
            this.deviceSelected = currentValue.deviceSelected;
            this.isVisibleBtnBulkAssing = currentValue.isBulkVisible;
            this.isCheckBoxVisible = currentValue.isCheckBoxVisible;
            this.isChecked = currentValue.isChecked;
            this.isLoading = currentValue.isLoading;
            this.selection.clear();
        }

        if (window.innerWidth < 960) {
            this.classDefaultLeft = 'col-md-12 col-lg-7';
            this.classDefaultRight = 'col-md-12 col-lg-5';
            this.classReverse = '';
        }
    }

    public ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
