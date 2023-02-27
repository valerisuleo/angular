import { ICell, IBadgeClass } from "./interfaces";

export function createCell(keys: string[], data: any[], isSetting: boolean, setCellProperty?): ICell[] {
    return data.map((obj) => {
        const cellObj = Object.assign({}, obj);
        keys.map((key) => {
            cellObj[key] = {
                value: obj[key],
                isValueShow: true,
                isIconShow: false,
                icon: '',
                className: '',
            }
        });
        if (isSetting) {
            setCellProperty(cellObj, obj);
        }
        return cellObj;
    });
}

export function getBadgeClasses(obj, classes: IBadgeClass[], key: string): string {
    let badgeClass: string;

    classes.forEach((item) => {
        if (item.name === obj[key]) {
            badgeClass = `badge badge-${item.className}`;
        }
    });
    return badgeClass;
}

export function dateMaker(item: string): string {
    return new Date(item).toLocaleDateString();
}

export function timeMaker(params): string {
    const date = params ? new Date(params * 1000) : new Date();
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return formattedTime;
}



