import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoExchangeComponent } from './photo-exchange.component';

describe('PhotoExchangeComponent', () => {
  let component: PhotoExchangeComponent;
  let fixture: ComponentFixture<PhotoExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
