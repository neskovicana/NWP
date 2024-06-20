import { Component } from '@angular/core';
import { Vet } from '../../model/vet';
import { NgForm } from '@angular/forms';
import { VetService } from '../../services/vet.service';
import { MessageService } from '../../services/message.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-vet',
  templateUrl: './create-vet.component.html',
  styleUrl: './create-vet.component.css',
  providers: [MessageService]
})
export class CreateVetComponent {

  public vet: Vet = {
    onDuty: false,
//    favorite: false,
    firstName: '',
    lastName: '',
    phoneNumber: '',
    specialization: ''
  };

  public confirmed = false;
  public message: string | undefined;

  constructor(private vetService: VetService) {
    this.initializeVet();
  }

  initializeVet() {
    this.vet = {
      onDuty: false,
//    favorite: false,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      specialization: ''
    }
  }

  // ovaj metod je trebao za two way binding prije koriscenja ngModel
  updateFirstName(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.vet.firstName = inputElement.value;
    }
  }

  createVet(vetForm: NgForm) {
    console.log('Creating vet ', this.vet);
    if (vetForm.valid) {
      // linija ispod je kljucna
      this.vetService.createVet(this.vet)
      .subscribe({
        next: (result: any) => {
          this.message = result.msg;
          this.vet = {
            onDuty: false,
//          favorite: false,
            firstName: '',
            lastName: '',
            phoneNumber: '',
            specialization: ''
          };
        },
        error: (err: HttpErrorResponse) => {
          this.message = err.error.msg;
        }
      });
    } else {
      this.message = 'Stock form is in an invalid state';
      console.error('Vet form is in an invalid state');
    }
  }

}
