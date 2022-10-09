import { Injectable } from '@angular/core';
import { Anomaly } from './anomaly.model';
import { Canal } from './canal.model';
import { Litige } from './litige.model';

@Injectable({
  providedIn: 'root'
})
export class LitigeService {

  litiges: Litige[] = [{
    id: '04L220702155',
    name: '	BK DIJON SAINT-APOLLINAIRE (218350) / ST-APOLLINAIRE',
    obs: 'CO - Refusé non commandé : marchandise restituée',
    canal: undefined,
    created: new Date(2022, 9, 8, 9, 52, 45),
    anomaly: Anomaly.RC,
    photos: ['/assets/litiges/9.jpg']
  }, {
    id: '134228C45143',
    name: 'BK CASTELNAU-LE-LEZ (34E361)',
    obs: 'marchandise restituée',
    canal: undefined,
    created: new Date(2022, 9, 8, 9, 42, 57),
    anomaly: Anomaly.RA,
    photos: ['/assets/litiges/1.JPG', '/assets/litiges/2.JPG', '/assets/litiges/3.JPG']
  }, {
    id: '134228C44903',
    name: 'BK LE MUY (83K261) / LE MUY',
    obs: '2204 TOMATE 57/67 1 CO RP Refusé non conforme marchandise non restituée détruite mauvaise qualité',
    canal: undefined,
    created: new Date(2022, 9, 8, 9, 33, 45),
    anomaly: Anomaly.RP,
    photos: ['/assets/litiges/7.jpg']
  }, {
    id: '418228A45145',
    name: 'BK PARC D\'AQUITAINE ST ANDRÉ DE CUB (33P244) / ST-ANDRE-DE-CUBZAC',
    obs: '2146 TOMATES 6kg 1 CO RP Refusé non conforme marchandise restituée',
    canal: undefined,
    created: new Date(2022, 9, 8, 9, 32, 45),
    anomaly: Anomaly.RP,
    photos: ['/assets/litiges/8.jpg']
  }, {
    id: '131228C19313',
    name: 'BK DIJON SAINT-APOLLINAIRE (218350) / ST-APOLLINAIRE',
    obs: 'marchandise non restituée détruite',
    canal: Canal.DESTRUCTION,
    created: new Date(2022, 9, 8, 8, 41, 45),
    anomaly: Anomaly.RA,
    photos: ['/assets/litiges/6.JPG']
  }, {
    id: '134228C44944',
    name: 'BK MONTÉLIMAR SOLEIL LEVANT (268687) / MONTELIMAR',
    obs: 'marchandise restituée ouvert dans la palette',
    canal: Canal.REDELIVERY,
    created: new Date(2022, 9, 7, 15, 9, 0),
    anomaly: Anomaly.RA,
    photos: ['/assets/litiges/4.JPG', '/assets/litiges/5.JPG']
  }, {
    id: '134228C45224',
    name: 'BK MARSEILLE CASTELLANE (13R010) / MARSEILLE',
    obs: `52086 CORNICHON TRANCHE 1782P- 6 sa 3 CO RC Refusé non commandé marchandise restituée
52096 HUILE FRITEUSE SANS PALME NE 4 CO RC Refusé non commandé marchandise restituée
60276 SEAU MOUTARDE A L'ANCIENNE 3 1 CO RC Refusé non commandé marchandise restituée
69374 TOPPING CARAMEL 1L V2 1 CO RC Refusé non commandé marchandise restituée
60358 VPK KING SAUCE / BIG KING 2 CO RC Refusé non commandé marchandise restituée
60359 VPK MAYONNAISE SALADE 3 CO RC Refusé non commandé marchandise restituée
51307 Moutarde 2 1 CO RC Refusé non commandé marchandise restituée
59983 Oignons frits 2 CO RC Refusé non commandé marchandise restituée
51203 Pot de 25 g de sauce aigre-douce 2 CO RC Refusé non commandé marchandise restitué`,
    canal: Canal.GIFT,
    created: new Date(2022, 9, 6, 15, 49, 45),
    anomaly: Anomaly.RC,
    photos: []
  }, {
    id: '134228C45697',
    name: 'BK SEYNE SUR MER (83F952) / SEYNE SUR MER',
    obs: '91270 FOURME D\'AMBERT TRANCHE 20G 10 CO RC Refusé non commandé, marchandise restituée',
    canal: Canal.SELL,
    created: new Date(2022, 9, 5, 17, 1, 45),
    anomaly: Anomaly.RC,
    photos: []
  }, {
    id: '112228C24359',
    name: 'BK NEMOURS',
    obs: '2314 KING BIO CAROTTES BIO FR UF F. 1 CO RP Refusé non conforme marchandise restituée dates pour le lendemain',
    canal: Canal.GIFT,
    created: new Date(2022, 9, 5, 12, 8, 45),
    anomaly: Anomaly.RP,
    photos: []
  }, {
    id: '418228A45339',
    name: 'BK LABARTHE SUR LEZE (31J319) / LABARTHE-SUR-LEZE',
    obs: '1602 WINGS CHICKEN 400P V3- 16 sachet 1 CO RP Refusé non conforme marchandise non restituée détruite aucune traçabilité',
    canal: Canal.DESTRUCTION,
    created: new Date(2022, 9, 5, 9, 17, 45),
    anomaly: Anomaly.RP,
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
    const ids = this.litiges.map(l => l.id)
    const uniqueIds = new Set(ids)
    if (ids.length != uniqueIds.size) {
      throw new Error('Duplicate record in litiges list')
    }

    return this.litiges
  }
}
