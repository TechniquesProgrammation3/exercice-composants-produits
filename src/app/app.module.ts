import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { FicheProduitComponent } from './fiche-produit/fiche-produit.component';
import { DetailFicheProduitComponent } from './detail-fiche-produit/detail-fiche-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedDePageComponent,
    ListeProduitsComponent,
    FicheProduitComponent,
    DetailFicheProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
