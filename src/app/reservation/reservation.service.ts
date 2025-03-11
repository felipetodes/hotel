import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = "http://localhost:3001/";
  private reservations: Reservation[] = [];



  // CRUD
  getReservations(): Reservation[] {
    return this.reservations;
  }
  getReservation(id: string): Reservation | undefined
  {
  return this.reservations.find(res => res.id === id);
  }
addReservation(reservation: Reservation): void {
reservation.id = Date.now().toString();
this.reservations.push(reservation);
}

deleReservation(id: string): void {
let index = this.reservations.findIndex(res => res.id !== id);
this.reservations.splice(index, 1);
  }

  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations[index] = updatedReservation;
  }
}
