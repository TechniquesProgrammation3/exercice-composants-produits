import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { PRODUITS } from '../mock-produits';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  produits : Produit[] = PRODUITS;

  constructor() { }

  ngOnInit(): void {
  }

}
