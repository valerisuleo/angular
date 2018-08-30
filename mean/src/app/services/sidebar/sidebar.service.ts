import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DataService } from '../data.service';


@Injectable()
// export class SidebarService extends DataService {
export class SidebarService {

  getlistaCode() {
    return [
      {
        "idCoda": 1,
        "canaleAssociato": "CONSUMER",
        "decrizioneFlusso": "FLUSSO QUALIFICAZIONE",
        "nomeCoda": "fax_in_consumer"
      },
      {
        "idCoda": 2,
        "canaleAssociato": "BUSINESS",
        "decrizioneFlusso": "FLUSSO QUALIFICAZIONE",
        "nomeCoda": "fax_in_business"
      },
      {
        "idCoda": 3,
        "canaleAssociato": "HIGH PRIORITY",
        "decrizioneFlusso": "FLUSSO QUALIFICAZIONE",
        "nomeCoda": "fax_in_high_priority"
      },
      {
        "idCoda": 4,
        "canaleAssociato": "CLIENTE",
        "decrizioneFlusso": "FLUSSO QUALIFICAZIONE",
        "nomeCoda": "fax_in_cliente"
      },
      {
        "idCoda": 5,
        "canaleAssociato": "",
        "decrizioneFlusso": "FLUSSO ATTIVAZIONE",
        "nomeCoda": "attivazione_ccm"
      },
      {
        "idCoda": 6,
        "canaleAssociato": "",
        "decrizioneFlusso": "FLUSSO ATTIVAZIONE",
        "nomeCoda": "cash2ren"
      },
      {
        "idCoda": 7,
        "canaleAssociato": "",
        "decrizioneFlusso": "FLUSSO ATTIVAZIONE",
        "nomeCoda": "conversione"
      },
      {
        "idCoda": 8,
        "canaleAssociato": "",
        "decrizioneFlusso": "FLUSSO GENERICO",
        "nomeCoda": "errata_attivazione"
      },
      {
        "idCoda": 9,
        "canaleAssociato": "",
        "decrizioneFlusso": "FLUSSO GENERICO",
        "nomeCoda": "richiesta_ppc"
      },
      {
        "idCoda": 10,
        "canaleAssociato": "",
        "decrizioneFlusso": "FLUSSO GENERICO",
        "nomeCoda": "trial_dealer"
      },
      {
        "idCoda": 11,
        "canaleAssociato": "",
        "decrizioneFlusso": "FLUSSO GENERICO",
        "nomeCoda": "fuori_standard"
      },
      {
        "idCoda": 12,
        "canaleAssociato": "",
        "decrizioneFlusso": "FLUSSO GENERICO",
        "nomeCoda": "furto_materiale_dealer"
      },
      {
        "idCoda": 13,
        "canaleAssociato": "",
        "decrizioneFlusso": "FLUSSO GENERICO",
        "nomeCoda": "furto_pin_pad_gprs"
      },
      {
        "idCoda": 14,
        "canaleAssociato": "",
        "decrizioneFlusso": "FLUSSO GENERICO",
        "nomeCoda": "procedure_concorsuali"
      },
      {
        "idCoda": 22,
        "canaleAssociato": null,
        "decrizioneFlusso": "FLUSSO GENERICO",
        "nomeCoda": "decesso"
      },
      {
        "idCoda": 23,
        "canaleAssociato": null,
        "decrizioneFlusso": "FLUSSO GENERICO",
        "nomeCoda": "evidenza_ pagamento"
      },
      {
        "idCoda": 24,
        "canaleAssociato": null,
        "decrizioneFlusso": "FLUSSO GENERALE",
        "nomeCoda": "generica"
      }
    ];
  }

  // constructor(http: Http) {
  //   super('http://172.18.205.181:8282/DocCRMH3G/birds', http);
  // }
}
