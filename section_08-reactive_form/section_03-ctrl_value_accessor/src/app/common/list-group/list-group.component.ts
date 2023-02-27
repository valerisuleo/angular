import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Input } from "@angular/core";

@Component({
    selector: "list-group",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./list-group.component.html",
    styleUrls: ["./list-group.component.scss"],
})
export class ListGroupComponent {
    @Input() list: any[];
    @Output('handleClick') click = new EventEmitter();

    getCurrent(item) {
        this.click.emit(item);
    }
}
