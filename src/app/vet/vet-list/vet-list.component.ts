import { Component } from '@angular/core';
import { Vet } from '../../model/vet';
import { VetService } from '../../services/vet.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrl: './vet-list.component.css'
})
export class VetListComponent {

  public vets: Vet[] = [];

  constructor(private vetService: VetService, private authService: AuthService) { }

  ngOnInit() {
    this.fetchVets();
  }

  fetchVets() {
    this.vetService.getVets()
      .subscribe(vets => {
        this.vets = vets;
      });
  }

}
