import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];

  // CRUD
  getReservations(): Reservation[] {
    return this.reservations;
  }

}
