import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilContentComponent } from './acceuil-content.component';

describe('AcceuilContentComponent', () => {
  let component: AcceuilContentComponent;
  let fixture: ComponentFixture<AcceuilContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceuilContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceuilContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
