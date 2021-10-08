import { Component, OnInit } from "@angular/core";
import { ICell } from "../todos/interface";
import { ITableFilter } from "../../shared/material/material-table/interfaces";
import { Subject } from "rxjs";
import { PostsService } from "./services/posts.service";
import { takeUntil } from "rxjs/operators";
import { IPost } from "./interface";

@Component({
    selector: "posts",
    templateUrl: "./posts.component.html",
    styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
    public columns: string[] = ["userId", "title", "id", "body", "action"];
    public dataSource: ICell[] = [];
    public tableFilter: ITableFilter = {
        isFiltering: false,
        keys: ["title", "body"],
    };
    private destroyed$: Subject<boolean> = new Subject();

    constructor(private service: PostsService) {}

    private getPosts(): void {
        this.service
            .getCollection()
            .pipe(takeUntil(this.destroyed$))
            .subscribe((response: IPost[]) => {
                const result = response.map((item) => {
                    return {
                        ...item,
                        action: [
                            { color: "warn", name: "delete", icon: "delete" },
                            { color: "accent", name: "edit", icon: "edit" },
                        ],
                    };
                });
                this.dataSource = this.createCell(
                    Object.keys(result[0]),
                    result,
                    this.setCellProperty
                );
            });
    }

    private createCell(keys: string[], data: any[], setCellProperty?): ICell[] {
        return data.map((obj) => {
            const cellObj = Object.assign({}, obj);
            keys.map((key) => {
                cellObj[key] = {
                    className: "",
                    value: obj[key],
                    isValueShow: true,
                    isIconShow: false,
                    tooltip: false,
                    icon: "",
                    color: "",
                };
            });
            setCellProperty(cellObj, obj);

            return cellObj;
        });
    }

    private setCellProperty(tableCell, obj): void {
        tableCell.id.className = "chip-success";
        tableCell.userId.className = "chip-primary";
        tableCell.action.isValueShow = false;
        tableCell.action.isIconShow = true;
        tableCell.action.tooltip = false;
    }

    public handleSort(data): void {
        const { dataSource, sort } = data;
        // sorting nested obj...
        dataSource.sortingDataAccessor = (item, property) => {
            switch (property) {
                case "userId":
                    return item["userId"].value;
                case "id":
                    return item["id"].value;
                case "title":
                    return item["title"].value;
                case "body":
                    return item["body"].value;
                default:
                    return item[property];
            }
        };
        dataSource.sort = sort;
    }

    public ngOnInit(): void {
        this.getPosts();
    }

    public ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
