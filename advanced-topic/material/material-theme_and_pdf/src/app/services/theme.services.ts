import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MaterialThemeService {
    private darkTheme = new Subject<boolean>();
    public isDarkTheme = this.darkTheme.asObservable();

    constructor() { }

    public setDarkTheme(isDarkTheme: boolean): void {
        this.darkTheme.next(isDarkTheme);
    }

}