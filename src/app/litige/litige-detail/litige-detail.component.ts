import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/menu/menu.service';
import { Canal } from '../canal.model';
import { DeliverySelectionComponent } from '../delivery-selection/delivery-selection.component';
import { Litige } from '../litige.model';
import { LitigeService } from '../litige.service';

@Component({
  selector: 'app-litige-detail',
  templateUrl: './litige-detail.component.html',
  styleUrls: ['./litige-detail.component.scss']
})
export class LitigeDetailComponent implements OnInit {

  canal = Canal;
  litige!: Litige;

  constructor(private route: ActivatedRoute, private litigeService: LitigeService, private router: Router, private menuService: MenuService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.litige = this.litigeService.get(this.route.snapshot.params['id']);
    this.menuService.title = `Position ${this.litige.id}`
  }

  solve(canal: Canal): void {
    if(canal === Canal.REDELIVERY) {
      this.dialog
        .open(DeliverySelectionComponent)
        .afterClosed().subscribe(recipient => {
          this.assignCanal(canal, recipient)
        });
    } else {
      this.assignCanal(canal);
    }
  }

  assignCanal(canal: Canal, recipient: string | undefined = undefined): void {
    // TODO send information to STEF + recipient
    this.litige.canal = canal;
    this.router.navigate(['/litiges']);
  }
}
