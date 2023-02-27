import { Injectable } from '@angular/core';

@Injectable()
export class LocalKeys {
  public static readonly CURRENT_USER = "current_user";
  public static readonly ACCESS_TOKEN = "access_token";
  public static readonly SITE_CONFIG = "site_configs";
}
