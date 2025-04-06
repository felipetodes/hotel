import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';
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
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      NomeHospede: ['', Validators.required],
      NumeroQuarto: ['', Validators.required],
      EmailHospede: ['', [Validators.required, Validators.email]]
    })

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("ID recebido:", id);

    if (id){
      this.reservationService.getReservation(id).subscribe(reservation => {
        if(reservation)
          this.reservationForm.patchValue(reservation);
      })
      }
    }

    onSubmit(){
    if(this.reservationForm.valid){
      let reservation: Reservation = this.reservationForm.value;
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if (id){
       // Update
       this.reservationService.updateReservation(id, reservation);
      }else{
        this.reservationService.addReservation(reservation);
      }
      this.router.navigate(['/list']);
  }
}
}
