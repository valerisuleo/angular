import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export class Settings {
  constructor(
    public name: string,
    public loadingSpinner: boolean,
    public fixedHeader: boolean,
    public sidenavIsOpened: boolean,
    public sidenavIsPinned: boolean,
    public sidenavUserBlock: boolean,
    public menu: string,
    public menuType: string,
    public theme: string,
    public rtl: boolean,
    public hasFooter: boolean
  ) {}
}

@Injectable()
export class AppSettings {
  public settings = new Settings(
    "classroom.cloud", //theme name
    true, //loadingSpinner
    true, //fixedHeader
    true, //sidenavIsOpened
    true, //sidenavIsPinned
    false, //sidenavUserBlock
    "vertical", //horizontal , vertical
    "default", //default, compact, mini
    "default", //default, indigo-light, teal-light, red-light, blue-dark, green-dark, pink-dark
    false, // true = rtl, false = ltr
    true // true = has footer, false = no footer
  );
  private settingsUpdated = new Subject<any>();
  settingsObservable$ = this.settingsUpdated.asObservable();
  public updateSettings(settings) {
    this.settings = settings;
    this.settingsUpdated.next(settings);
  }
}
