import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VetService } from '../../services/vet.service';
import { Vet } from '../../model/vet';

@Component({
  selector: 'app-vet-item',
  templateUrl: './vet-item.component.html',
  styleUrl: './vet-item.component.css'
})
export class VetItemComponent implements OnInit {

  @Input() public vet: Vet | undefined;

  constructor(private vetService: VetService) { }

  onToggleOnDuty(event: any) {
    if (this.vet) {
      this.vetService.toggleOnDuty(this.vet)
        .subscribe(
          (vet) => {
            if (this.vet) {
              this.vet.onDuty = !this.vet.onDuty
            }
          })
    };
  }

  isPhoneNumberPositive(): boolean {
    return !!this.vet && !!this.vet.phoneNumber && this.vet.phoneNumber.startsWith("00381");
  }

  ngOnInit(): void {

  }

}
