import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { MenuService } from '../menu/menu.service';
import { AchievementService } from './achievement.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

  constructor(private AchievementService: AchievementService, private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.title = `Synthèse`
  }
}
