import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVetComponent } from './create-vet.component';

describe('CreateVetComponent', () => {
  let component: CreateVetComponent;
  let fixture: ComponentFixture<CreateVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateVetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
