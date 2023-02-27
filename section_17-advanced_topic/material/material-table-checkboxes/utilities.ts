import { TranslationService } from "../../../services/translation.service";
import { IChip } from "./interface";

function chipGroupMaker(deviceGroupName: string, ts: TranslationService): IChip {
    const chip = {} as IChip;
    chip.label = deviceGroupName == 'Unassigned Devices' ? `${ts.getTranslation('app.devices.devices_chip_unassigned')}` : deviceGroupName;
    chip.className = deviceGroupName == 'Unassigned Devices' ? 'chips chip-unassigned ' : 'chips chip-primary';
    return chip;
}
function chipMaker(value: string): IChip {
    const chip = {} as IChip;
    chip.label = value;
    chip.className = 'chips chip-plain';
    return chip;
}

function chipVersionMaker(device: any): IChip {
    const chip = {} as IChip;
    chip.toBeShowed = device.clientVersionDisplay;
    chip.className = device.outOfDate ? 'chips chip-danger ' : 'chips chip-plain';
    chip.label = device.clientVersion
    return chip;
}

function chipStatusMaker(status: number, ts: TranslationService): IChip {
    const ads = 'app.devices.devices_state_';
    const chip = {} as IChip;

    switch (status) {
        case 1:
            chip.className = 'chips chip-danger';
            chip.label = `${ts.getTranslation(`${ads}notconnected`)}`;
            break;
        case 2:
            chip.className = 'chips chip-disabled';
            chip.label = `${ts.getTranslation(`${ads}unlicensed`)}`;
            break;
        case 3:
            chip.className = 'chips chip-success';
            chip.label = `${ts.getTranslation(`${ads}available`)}`;
            break;
        case 4:
            chip.className = 'chips chip-success';
            chip.label = `${ts.getTranslation(`${ads}inclass`)}`;
            break;
        case 5:
            chip.className = 'chips chip-danger';
            chip.label = `${ts.getTranslation(`${ads}offnetwork`)}`;
            break;
        case 6:
            chip.className = 'chips chip-warning';
            chip.label = `${ts.getTranslation(`${ads}outofhours`)}`;
            break;
    }
    return chip;
}


function iconDevice(item): string {
    let className = "fa fa-";

    switch (item) {
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "13":
        case "15":
        case "16":
        case "24":
        case 'desktop':
        case "low profile desktop":
        case "pizza box":
        case "mini tower":
        case "tower":
        case "all in one":
        case "space-saving":
        case "lunch box":
        case "sealed-case pc":
            className += "desktop";
            break;
        case "8":
        case "9":
        case "10":
        case "14":
        case "31":
        case "32":
        case 'laptop':
        case "notebook":
        case "sub notebook":
        case "convertible":
        case "detachable":
        case "chromebook":
        case "portable":
            className += "laptop";
            break;
        case "11":
        case "30":
        case "hand held":
        case "tablet":
        case "mobile":
            className += "tablet-android-alt mr-1";
            break;
        case "998":
        case "server":
            className += "server";
            break;
        case "999":
        case "terminal server":
            className += "chart-network";
            break;
        default:
            className += "question-circle";
            break;
    }
    return className;
};

function iconOs(obj): string {
    const os = obj.osVersion.toLowerCase();
    let className;

    switch (os) {
        case 'windows':
            className = 'fab fa-fw fa-windows'
            break;
        case 'macos':
            className = 'fab fa-fw fa-apple'
            break;
        case 'chromeos':
            className = 'fab fa-fw fa-chrome'
            break;
        case 'android':
            className = 'fab fa-android'
            break;
    }
    return className;
}

export default {
    chipGroupMaker,
    chipMaker,
    chipVersionMaker,
    chipStatusMaker,
    iconDevice,
    iconOs
}