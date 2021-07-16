import { Injectable } from '@angular/core';
import { HttpResponseBase } from '@angular/common/http';

@Injectable()
export class Utilities {
  public static readonly captionAndMessageSeparator = ":";
  public static readonly noNetworkMessageCaption = "No Network";
  public static readonly noNetworkMessageDetail = "The server cannot be reached";
  public static readonly accessDeniedMessageCaption = "Access Denied!";
  public static readonly accessDeniedMessageDetail = "";
  public static getHttpResponseMessage(data: any): string[] {
    let responses: string[] = [];
    if (this.checkNoNetwork(data)) {
      responses.push(`${this.noNetworkMessageCaption}${this.captionAndMessageSeparator} ${this.noNetworkMessageDetail}`);
    }
    if (this.checkNotFound(data)) {
      responses.push(`${data.url}${this.captionAndMessageSeparator} ${data.statusText}`)
    }
    if (this.checkAccessDenied(data)) {
      responses.splice(0, 0, `${this.accessDeniedMessageCaption}${this.captionAndMessageSeparator} ${this.accessDeniedMessageDetail}`);
    }
    if (this.checkErrorMessage(data)) {
      //responses.push(data.message);
      responses.push('This action has failed if this continues please contact support'); //show common error message for all API failure
    }
    return responses;
  }
  public static checkNoNetwork(response: HttpResponseBase) {
    if (response.status == 0) {
      return response.status == 0;
    }
    return false;
  }
  public static checkAccessDenied(response: HttpResponseBase) {
    if (response.status == 403) {
      return response.status == 403;
    }
    return false;
  }
  public static checkErrorMessage(response: any) {
    if (response.message && response.message.length > 0) {
      return true
    }
    return false;
  }
  public static checkNotFound(response: HttpResponseBase) {
    if (response.status == 404) {
      return response.status == 404;
    }
    return false;
  }
  public static checkIsLocalHost(url: string, base?: string) {
    if (url) {
      let location = new URL(url, base);
      return location.hostname === "localhost" || location.hostname === "127.0.0.1";
    }
    return false;
  }
  public static JSonTryParse(value: string) {
    try {
      return JSON.parse(value);
    } catch (e) {
      if (value === "undefined") return void 0;
      return value;
    }
  }
  public static splitInTwo(text: string, separator: string): {
    firstPart: string,
    secondPart: string
  } {
    let separatorIndex = text.indexOf(separator);
    if (separatorIndex == -1) return {
      firstPart: text,
      secondPart: null
    };
    let part1 = text.substr(0, separatorIndex).trim();
    let part2 = text.substr(separatorIndex + 1).trim();
    return {
      firstPart: part1,
      secondPart: part2
    };
  }
  public static safeStringify(object) {
    let result: string;
    try {
      result = JSON.stringify(object);
      return result;
    } catch (error) { }
    let simpleObject = {};
    for (let prop in object) {
      if (!object.hasOwnProperty(prop)) {
        continue;
      }
      if (typeof (object[prop]) == 'object') {
        continue;
      }
      if (typeof (object[prop]) == 'function') {
        continue;
      }
      simpleObject[prop] = object[prop];
    }
    result = "[***Sanitized Object***]: " + JSON.stringify(simpleObject);
    return result;
  }
  public static toTitleCase(text: string) {
    return text.replace(/\w\S*/g, (subString) => {
      return subString.charAt(0).toUpperCase() + subString.substr(1).toLowerCase();
    });
  }
}
