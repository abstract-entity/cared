import { Injectable } from '@angular/core';
import { Canal } from './canal.model';
import { Litige } from './litige.model';

@Injectable({
  providedIn: 'root'
})
export class LitigeService {

  constructor() { }

  list(): Litige[] {
    return [{
      id: 1,
      name: 'Litige 1',
      created: new Date(),
      canal: null
    },{
      id: 2,
      name: 'Litige 2',
      created: new Date(),
      canal: new Canal()
    },{
      id: 3,
      name: 'Litige 3',
      created: new Date(),
      canal: new Canal()
    },{
      id: 4,
      name: 'Litige 4',
      created: new Date(),
      canal: new Canal()
    }]
  }

  get(id: number): Litige {
    return { id } as Litige
  }
}
