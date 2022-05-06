import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoiveDetailComponent } from './moive-detail.component';

describe('CourseDetailComponent', () => {
  let component: MoiveDetailComponent;
  let fixture: ComponentFixture<MoiveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoiveDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
