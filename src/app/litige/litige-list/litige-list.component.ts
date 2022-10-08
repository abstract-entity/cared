import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-litige-list',
  templateUrl: './litige-list.component.html',
  styleUrls: ['./litige-list.component.scss']
})
export class LitigeListComponent implements OnInit {

  litiges = [{
    id: 1,
    name: 'Litige 1',
  },{
    id: 2,
    name: 'Litige 2',
  },{
    id: 3,
    name: 'Litige 3',
  },{
    id: 4,
    name: 'Litige 4',
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
