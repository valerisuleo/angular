import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodosService } from "../todos.service";
import { ListGroupComponent } from "../../../common/list-group/list-group.component";
import { Router } from "@angular/router";

@Component({
    selector: "index",
    standalone: true,
    imports: [CommonModule, ListGroupComponent],
    templateUrl: "./index.component.html",
    styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
    todos = [];
    constructor(private service: TodosService, private router: Router) {}

    ngOnInit(): void {
        this.service.getTodos().subscribe((res: any) => (this.todos = res));
    }

    handleClick(current) {
        this.router.navigate([`todos/${current.id}`], {
            state: {
                data: current,
            },
        });
    }
}
