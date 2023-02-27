import { Component, Input } from "@angular/core";

@Component({
    selector: "bootstrap-alert",
    templateUrl: "./bootstrap-alert.component.html",
    styleUrls: ["./bootstrap-alert.component.scss"],
})
export class BootstrapAlertComponent {
    @Input() message: string;
}
