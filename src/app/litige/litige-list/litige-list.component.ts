import { Component, OnInit } from '@angular/core';
import { Litige } from '../litige.model';
import { LitigeService } from '../litige.service';

@Component({
  selector: 'app-litige-list',
  templateUrl: './litige-list.component.html',
  styleUrls: ['./litige-list.component.scss']
})
export class LitigeListComponent implements OnInit {

  litiges: Litige[] = []

  constructor(private litigeServiece: LitigeService) { }

  ngOnInit(): void {
    this.litiges = this.litigeServiece.list().sort((a, b) => a.created.getTime() - b.created.getTime())
  }
}
