export interface IAccount {
    accountId: string;
    accountStatus: string;
    created: string;
    expiryDate: string;
    lastUpdated: string;
    lastUpdatedBy: string;
    licenseName: string;
    licenseType: string;
    region: string;
    flagName: string;
    numberOfLicenses: number;
    assignedLicenses: number;
}

export interface INavigateTo {
    url: string;
    property: string;
}

export interface IHistoryLicense {
    date: string;
    user: string;
    changes: string[];
}
