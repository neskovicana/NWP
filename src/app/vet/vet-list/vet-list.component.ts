import { Component } from '@angular/core';
import { VetService } from '../../services/vet.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Vet } from '../../model/vet';

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
