import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrivenformsComponent } from './templatedrivenforms.component';

describe('TemplatedrivenformsComponent', () => {
  let component: TemplatedrivenformsComponent;
  let fixture: ComponentFixture<TemplatedrivenformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatedrivenformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatedrivenformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
