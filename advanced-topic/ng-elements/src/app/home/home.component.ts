import { Component, Injector, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { createCustomElement } from "@angular/elements";
import { BootstrapAlertComponent } from "../common/bootstrap-alert/bootstrap-alert.component";

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    private url = "https://jsonplaceholder.typicode.com/users";
    public message = " A simple primary alert—check it out!";

    public users = [];
    constructor(private http: HttpClient, private injector: Injector) {
    }

    ngOnInit(): void {
        this.http.get(this.url).subscribe((res: any[]) => {
            this.users = res.map((item) => item.name);
        });
    }
}
