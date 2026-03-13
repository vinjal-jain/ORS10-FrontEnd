import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionlistComponent } from './permissionlist.component';

describe('PermissionlistComponent', () => {
  let component: PermissionlistComponent;
  let fixture: ComponentFixture<PermissionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
