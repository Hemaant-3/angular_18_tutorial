import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttribDirComponent } from './attrib-dir.component';

describe('AttribDirComponent', () => {
  let component: AttribDirComponent;
  let fixture: ComponentFixture<AttribDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttribDirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttribDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
