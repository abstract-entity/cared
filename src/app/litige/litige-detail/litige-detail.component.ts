import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Litige } from '../litige.model';
import { LitigeService } from '../litige.service';

@Component({
  selector: 'app-litige-detail',
  templateUrl: './litige-detail.component.html',
  styleUrls: ['./litige-detail.component.scss']
})
export class LitigeDetailComponent implements OnInit {

  litige!: Litige;

  constructor(private route: ActivatedRoute, private litigeService: LitigeService) { }

  ngOnInit(): void {
    this.litige = this.litigeService.get(this.route.snapshot.params['id']);
  }

}
