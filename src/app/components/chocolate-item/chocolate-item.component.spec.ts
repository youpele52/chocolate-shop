import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolateItemComponent } from './chocolate-item.component';

describe('ChocolateItemComponent', () => {
  let component: ChocolateItemComponent;
  let fixture: ComponentFixture<ChocolateItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChocolateItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChocolateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
