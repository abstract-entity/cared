import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delivery-selection',
  templateUrl: './delivery-selection.component.html',
  styleUrls: ['./delivery-selection.component.scss']
})
export class DeliverySelectionComponent {

  selectedValue!: string;
  dests: string[] = [
    'Burger King - Lorient',
    'Burger King - Vannes',
    'Burger King - Rennes',
    'Burger King - Nantes',
    'Burger King - Paris',
    'Burger King - Lyon',
    'Burger King - Marseille',
    'Burger King - Toulouse',
    'Burger King - Bordeaux',
    'Burger King - Lille',
    'Burger King - Strasbourg',
    'Burger King - Montpellier',
    'Burger King - Nice',
    'Burger King - Nîmes',
    'Burger King - Toulon',
    'Burger King - Clermont-Ferrand',
    'Burger King - Reims',
    'Burger King - Le Havre',
    'Burger King - Rouen',
    'Burger King - Tours',
    'Burger King - Nancy',
    'Burger King - Metz',
    'Burger King - Saint-Étienne',
    'Burger King - Dijon',
    'Burger King - Limoges',
    'Burger King - Angers',
    'Burger King - Caen',
    'Burger King - Le Mans',
    'Burger King - Brest',
  ]

  constructor(public dialogRef: MatDialogRef<DeliverySelectionComponent>) { }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.selectedValue);
  }
}
