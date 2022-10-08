import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanalService {

  constructor() { }

  list() {
    return [{
      name: "Relivraison"
    },{
      name: "Don banque alimentaire"
    },{
      name: "RelivraRecyclageison"
    },{
      name: "Revente en interne"
    },{
      name: "Destruction"
    }]
  }
}
