import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViwFormComponent } from './viw-form.component';

describe('ViwFormComponent', () => {
  let component: ViwFormComponent;
  let fixture: ComponentFixture<ViwFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViwFormComponent]
    });
    fixture = TestBed.createComponent(ViwFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
