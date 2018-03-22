import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonhoComponent } from './sonho.component';

describe('SonhoComponent', () => {
  let component: SonhoComponent;
  let fixture: ComponentFixture<SonhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
