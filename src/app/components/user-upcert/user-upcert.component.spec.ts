import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpcertComponent } from './user-upcert.component';

describe('UserUpcertComponent', () => {
  let component: UserUpcertComponent;
  let fixture: ComponentFixture<UserUpcertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserUpcertComponent]
    });
    fixture = TestBed.createComponent(UserUpcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
