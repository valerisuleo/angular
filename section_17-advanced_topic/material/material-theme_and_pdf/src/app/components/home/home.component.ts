import { Component, OnInit } from '@angular/core';
import { MaterialThemeService } from '../../services/theme.services';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(private service: MaterialThemeService) { }

    toggleTheme(e) {
        this.service.setDarkTheme(e);
    }

    ngOnInit(): void {
    }

}
