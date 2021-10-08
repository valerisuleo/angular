import { Component, OnInit } from "@angular/core";
import { ICell, ITodo } from "./interface";
import { ITableFilter } from "../../shared/material/material-table/interfaces";
import { Subject } from "rxjs";
import { TodosService } from "./services/todos.service";
import { takeUntil } from "rxjs/operators";
import { PostsService } from "../posts/services/posts.service";
import { IPost } from "../posts/interface";

@Component({
    selector: "todos",
    templateUrl: "./todos.component.html",
    styleUrls: ["./todos.component.scss"],
})
export class TodosComponent implements OnInit {
    public columns: string[] = [];
    public dataSource: ICell[] = [];
    public tableFilter: ITableFilter = {
        isFiltering: true,
        keys: ["id", "title", "userId"],
    };
    private destroyed$: Subject<boolean> = new Subject();

    constructor(
        private todosService: TodosService,
        private postsService: PostsService
    ) {}

    currentTab;

    tabChanged(current) {
        // this.dataSource = [];
        const { textLabel } = current.tab;
        this.currentTab = textLabel;

        if (textLabel === "posts") {
            this.getPosts(textLabel);
        } else {
            this.getTodos(textLabel);
        }
    }

    private getPosts(textLabel): void {
        this.postsService
            .getCollection()
            .pipe(takeUntil(this.destroyed$))
            .subscribe((response: IPost[]) => {
                this.dataSource = this.createCell(
                    Object.keys(response[0]),
                    response,
                    textLabel
                );
                this.columns = ["userId", "title", "id", "body"];
            });
    }

    private getTodos(textLabel): void {
        this.todosService
            .getCollection()
            .pipe(takeUntil(this.destroyed$))
            .subscribe((response: ITodo[]) => {
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
                    textLabel
                );
                this.columns = ["completed", "id", "title", "userId", "action"];
            });
    }

    private createCell(
        keys: string[],
        data: any[],
        textLabel: string
    ): ICell[] {
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
            textLabel === "todos"
                ? this.setCellTodosProperty(cellObj, obj)
                : this.setCellPostsProperty(cellObj, obj);
            return cellObj;
        });
    }

    private setCellPostsProperty(tableCell, obj): void {
        tableCell.id.className = "chip-success";
        tableCell.userId.className = "chip-primary";
    }

    private setCellTodosProperty(tableCell, obj): void {
        tableCell.completed.tooltip = true;
        tableCell.completed.isValueShow = false; // hide value
        tableCell.completed.isIconShow = true; // replace with and icon
        tableCell.completed.icon = obj.completed
            ? "check_circle"
            : "unpublished"; // assing icon
        tableCell.completed.color = obj.completed ? "primary" : "warn"; // assing color

        tableCell.action.isValueShow = false;
        tableCell.action.isIconShow = true;
        tableCell.action.tooltip = false;
    }

    public handleSort(data): void {
        const { dataSource, sort } = data;
        // sorting nested obj...
        dataSource.sortingDataAccessor = (item, property) => {
            switch (property) {
                case "completed":
                    return item["completed"].value;
                case "id":
                    return item["id"].value;
                case "title":
                    return item["title"].value;
                case "userId":
                    return item["userId"].value;
                default:
                    return item[property];
            }
        };
        dataSource.sort = sort;
    }

    public ngOnInit(): void {
        this.getTodos("todos");
    }

    public ngOnDestroy(): void {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
