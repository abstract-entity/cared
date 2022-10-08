import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor() { }

  data() {
    return [{
      name: "Relivraison",
      quantity: 17
    }, {
      name: "Don banque alimentaire",
      quantity: 9
    },{
      name: "Recyclage",
      quantity: 7
    }, {
      name: "Revente en interne",
      quantity: 4,
    }, {
      name: "Destruction",
      quantity: 3
    }]
  }
}
