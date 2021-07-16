import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppSettings, Settings } from '../../services/settings.services';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './app-signin.component.html',
  styleUrls: ['./app-signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppSigninComponent implements OnInit {

  public settings: Settings;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private cd: ChangeDetectorRef, public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;
    if (this.activatedRoute.snapshot.queryParams.autosignin ) {
      let autosignin = (this.activatedRoute.snapshot.queryParams.autosignin) ? this.activatedRoute.snapshot.queryParams.autosignin : undefined;
      setTimeout(() => {
        (autosignin) ? this.signIn() : '';
      })
      
    }
  }

  ngOnInit(): void {
    this.settings.loadingSpinner = false;
    this.cd.markForCheck();
  }

  signIn() {
    this.authService.startSigninMainWindow();
  }

  logout() {
    this.authService.logout();
    this.cd.markForCheck();
  }

}
