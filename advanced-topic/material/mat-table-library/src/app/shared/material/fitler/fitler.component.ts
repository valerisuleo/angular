import { Component, OnInit } from "@angular/core";
import { DataSourceService } from "../../datasource.service";
import { ITableFilter } from "../material-table/interfaces";

@Component({
    selector: "fitler",
    templateUrl: "./fitler.component.html",
    styleUrls: ["./fitler.component.scss"],
})
export class FitlerComponent implements OnInit {
    dataSource;
    tableFilter: ITableFilter;
    constructor(private service: DataSourceService) {}

    public applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue.trim();
    }

    ngOnInit(): void {
        this.service.getData.subscribe((data: any) => {
            const { dataSource, tableFilter } = data;
            this.dataSource = dataSource;
            this.dataSource.filterPredicate = (data, filter: string) => {
                return tableFilter.keys.some((key: string) => {
                    return JSON.stringify(data[key])
                        .toLowerCase()
                        .includes(filter.toLowerCase());
                });
            };
        });
    }
}
