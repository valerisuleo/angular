export interface IDevice {
    deviceID: string;
    name: string;
    siteID: string;
    siteName: string;
    deviceGroupID: string;
    deviceGroupName: string;
    identifier: string;
    clientVersionDisplay: string;
    clientVersion: number;
    osVersion: string;
    sysEnclosure: string;
    model: string;
    location: string;
    assetTag: string;
    deviceState: number;
    outOfDate: boolean;
};

export interface IActions {
    label: string;
    name: string;
    icon: string;
    id: string;
    color: string;
};

export interface IChip {
    className: string;
    label: string;
    toBeShowed?: string;
}

export interface ITableDevices {
    settings: any;
    devices: any[];
    displayedColumns: string[];
    deviceSelected?: any[];
    isBulkVisible: boolean;
    isCheckBoxVisible: boolean;
    isChecked: boolean;
    isLoading: boolean;
    col: IColsIndex;
}

export interface IColsIndex {
    siteIndex?: number;
    groupIndex: number;
    versionIndex: number;
    statusIndex: number;
    iconsIndex: number;
}