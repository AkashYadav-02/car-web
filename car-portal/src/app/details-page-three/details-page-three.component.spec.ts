import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPageThreeComponent } from './details-page-three.component';

describe('DetailsPageThreeComponent', () => {
  let component: DetailsPageThreeComponent;
  let fixture: ComponentFixture<DetailsPageThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPageThreeComponent]
    });
    fixture = TestBed.createComponent(DetailsPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
