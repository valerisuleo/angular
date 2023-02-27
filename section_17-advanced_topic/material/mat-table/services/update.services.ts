import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class UpdateService {
  allSitesData: any = [];
  private allSiteUpdated = new Subject<any>();
  private selectedSite = new Subject<any>();
  private updateLicense = new Subject<any>();

  allSiteObservable$ = this.allSiteUpdated.asObservable();
  selectedSiteObservable$ = this.selectedSite.asObservable();
  updateLicenseObservable$ = this.updateLicense.asObservable();

  public updateSites(sites, type: string = 'siteMenu') {
    let siteObject = {
      sites: sites,
      type: type
    }
    this.allSitesData = sites;
    this.allSiteUpdated.next(siteObject);
  }

  public setSelectedSite(site, type: string = 'siteMenu') {
    let siteObject = {
      site: site,
      type: type
    }
    this.selectedSite.next(siteObject);
  }

  public notifyUpdateLicense() {
    this.updateLicense.next();
  }
}
