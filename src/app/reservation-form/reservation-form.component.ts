import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
@Component({
  selector: 'app-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService
          ){}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      NomeHospede: ['', Validators.required],
      NumeroQuarto: ['', Validators.required],
      EmailHospede: ['', [Validators.required, Validators.email]]
    })
}

    onSubmit(){
    if(this.reservationForm.valid){

      let reservation: Reservation = this.reservationForm.value;
      this.reservationService.addReservation(reservation);

  }
}
}
