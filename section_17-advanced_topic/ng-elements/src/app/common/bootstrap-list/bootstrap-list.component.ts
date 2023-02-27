import { Component, Input } from "@angular/core";

@Component({
    selector: "bootstrap-list",
    templateUrl: "./bootstrap-list.component.html",
    styleUrls: ["./bootstrap-list.component.scss"],
})
export class BootstrapListComponent {
    @Input() list;
}
