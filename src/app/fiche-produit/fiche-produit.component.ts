import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../produit';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css']
})
export class FicheProduitComponent implements OnInit {
  @Input() produit : Produit;

  constructor() { }

  ngOnInit(): void {
  }

}
