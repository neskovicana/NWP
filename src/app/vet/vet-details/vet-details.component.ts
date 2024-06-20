import { Component } from '@angular/core';
import { VetService } from '../../services/vet.service';
import { ActivatedRoute } from '@angular/router';
import { Vet } from '../../model/vet';

@Component({
  selector: 'app-vet-details',
  templateUrl: './vet-details.component.html',
  styleUrl: './vet-details.component.css'
})
export class VetDetailsComponent {

  public vet: Vet | undefined;

  constructor(private vetService: VetService,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const vetCode = this.route.snapshot.paramMap.get('phoneNumber');
    if (vetCode != null) {
      this.vetService.getVet(vetCode).subscribe(vet => this.vet = vet);
    }
  }
  
}
