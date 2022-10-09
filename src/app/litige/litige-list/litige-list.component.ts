import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu/menu.service';
import { Canal } from '../canal.model';
import { Litige } from '../litige.model';
import { LitigeService } from '../litige.service';

@Component({
  selector: 'app-litige-list',
  templateUrl: './litige-list.component.html',
  styleUrls: ['./litige-list.component.scss']
})
export class LitigeListComponent implements OnInit {

  litiges: Litige[] = []

  constructor(private litigeServiece: LitigeService, private menuService: MenuService) { }

  ngOnInit(): void {
    this.litiges = this.litigeServiece.list().sort((a, b) => a.created.getTime() - b.created.getTime())
    this.menuService.title = `Menu`
  }

  canalToIcon(canal: Canal | undefined): string {
    switch (canal) {
      case Canal.REDELIVERY:
        return 'local_shipping'
      case Canal.GIFT:
        return 'card_giftcard'
      case Canal.SELL:
        return 'storefront'
      case Canal.RECYCLE:
        return 'recycling'
      case Canal.DESTRUCTION:
        return 'delete_outline'
      default:
        return 'question_mark'
    }
  }
}
