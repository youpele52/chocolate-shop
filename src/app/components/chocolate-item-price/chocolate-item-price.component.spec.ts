import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolateItemPriceComponent } from './chocolate-item-price.component';

describe('ChocolateItemPriceComponent', () => {
  let component: ChocolateItemPriceComponent;
  let fixture: ComponentFixture<ChocolateItemPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChocolateItemPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChocolateItemPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
