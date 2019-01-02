import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../data.service';



@Injectable()
export class InitDocsService {

  getFormParmas() {
    return [
      {
        radiosBtns: [
          {id:1, radioName: 'Fax in'},
          {id:2, radioName: 'Casella Postale'},
          {id:3, radioName: 'Lavorato'},
          {id:7, radioName: 'Cestino'}
        ],
        selectChannels: [
          {id:4, channelName: 'business'},
          {id:5, channelName: 'consumer'},
          {id:6, channelName: 'high priority'},
        ],
        selectFaxes: [
          {id:12, faxName: 'Uguale a'},
          {id:22, faxName: 'Contiene'}
        ]
      }
    ];
  }

  constructor() { }
}

// @Injectable()
// export class InitDocsService extends DataService {
//
//   constructor(http: Http) {
//     super('http://172.18.205.181:8282/DocCRMH3G/searchDocs/init', http);
//   }
// }
