import { Injectable } from '@angular/core';

@Injectable()
export class MyArchiveService {

  constructor() { }

    getArchive() {
      return [{
      id: '110866',
      year: 2018,
      month: 1,
      },{
      id: '465321',
      year: 2018,
      month: 2,
      },{
      id: '780628',
      year: 2018,
      month: 3,
    }];
  }
}
