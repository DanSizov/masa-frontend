import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPage } from './rxjs.page';

describe('RxjsComponent', () => {
  let component: RxjsPage;
  let fixture: ComponentFixture<RxjsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RxjsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RxjsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
