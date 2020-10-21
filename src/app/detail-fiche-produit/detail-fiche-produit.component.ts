import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-fiche-produit',
  templateUrl: './detail-fiche-produit.component.html',
  styleUrls: ['./detail-fiche-produit.component.css']
})
export class DetailFicheProduitComponent implements OnInit {
  @Input() nom : string;
  @Input() description : string;

  constructor() { }

  ngOnInit(): void {
  }

}
