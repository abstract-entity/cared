import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitigeListComponent } from './litige-list.component';

describe('LitigeListComponent', () => {
  let component: LitigeListComponent;
  let fixture: ComponentFixture<LitigeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitigeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitigeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
