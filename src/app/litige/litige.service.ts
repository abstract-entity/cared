import { Injectable } from '@angular/core';
import { Anomaly } from './anomaly.model';
import { Canal } from './canal.model';
import { Litige } from './litige.model';

@Injectable({
  providedIn: 'root'
})
export class LitigeService {

  litiges: Litige[] = [{
    id: '0Y6220389567',
    name: 'KFC Nantes',
    obs: 'Colis bas de palette endommagée par un transpalette',
    canal: undefined,  // Canal.REDELIVERY ou Canal.GIFT ou Canal.SELL ou Canal.RECYCLE ou Canal.DESTRUCTION
    created: new Date(),
    anomaly: Anomaly.RA,  // Anomaly.RA ou Anomaly.RC ou Anomaly.RD ou Anomaly.RH ou Anomaly.RP ou Anomaly.RT
    photos: ['/assets/litiges/1.png', '/assets/litiges/2.png', '/assets/litiges/3.png']
  }, {
    id: '0Y6220389572',
    name: 'KFC Nantes',
    obs: 'RAS',
    canal: Canal.SELL,
    created: new Date(),
    anomaly: Anomaly.RA,
    photos: []
  }, {
    id: '0Y6220389567',
    name: 'KFC Nantes',
    obs: 'RAS',
    canal: undefined,
    created: new Date(),
    anomaly: Anomaly.RH,
    photos: ['/assets/litiges/1.png', '/assets/litiges/2.png', '/assets/litiges/3.png']
  }, {
    id: '0Y6220389568',
    name: 'KFC Rennes',
    obs: 'Colis trempé',
    canal: Canal.DESTRUCTION,
    created: new Date(),
    anomaly: Anomaly.RP,
    photos: ['/assets/litiges/1.png', '/assets/litiges/2.png', '/assets/litiges/3.png']
  },{
    id: '0Y6220389569',
    name: 'KFC Vannes',
    obs: 'xx',
    canal: Canal.GIFT,
    created: new Date(),
    anomaly: Anomaly.RH,
    photos: []
  },{
    id: '0Y6220389570',
    name: 'KFC Lorient',
    obs: '',
    canal: Canal.GIFT,
    created: new Date(),
    anomaly: Anomaly.RD,
    photos: []
  }]

  constructor() { }

  get(id: string): Litige {
    const litige = this.litiges.find(l => l.id == id)
    if (litige) {
      return litige;
    }
    throw new Error('Litige not found');
  }

  list(): Litige[] {
    return this.litiges
  }
}
