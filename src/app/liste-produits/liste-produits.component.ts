import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { PRODUITS } from '../mock-produits';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  produit1 : Produit = { id:'1', nom: 'abc', description: '...', prix : 10};
  produit2 : Produit = { id:'2', nom: 'xyz', description: '...', prix : 11};
  produits = PRODUITS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
