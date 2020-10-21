import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFicheProduitComponent } from './detail-fiche-produit.component';

describe('DetailFicheProduitComponent', () => {
  let component: DetailFicheProduitComponent;
  let fixture: ComponentFixture<DetailFicheProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFicheProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFicheProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
