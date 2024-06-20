import { Component } from '@angular/core';
import { Pet } from '../../model/pet';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrl: './pet-item.component.css'
})
export class PetItemComponent {

  public pet = new Pet(new Date('2020-03-03'), 'M', 'Bobi', 'pas');

  formatDate(date: Date): string {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

  toggleFavorite(event: any) {
    console.log('We are toggling the favorite', event);
    this.pet.favorite = !this.pet.favorite;
  }
}
