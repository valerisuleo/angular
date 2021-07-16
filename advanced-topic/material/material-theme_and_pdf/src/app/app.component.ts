import { Component } from '@angular/core';
import { MaterialThemeService } from './services/theme.services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'theme';

    isDark: boolean = false;

    constructor(private service: MaterialThemeService) {
        service.isDarkTheme.subscribe((data: boolean) => {
            this.isDark = data;
        })

    }



}