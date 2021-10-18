import { Component, OnInit } from '@angular/core';
import {BookingsService} from './bookings.service';
import {Booking} from './bookings.model';
import {IonItemSliding} from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];

  constructor(private bookingsService: BookingsService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingsService.bookings;
  }

  onDeleteBooking(bookingId: string, slidingEl: IonItemSliding){
    slidingEl.close().then();
    this.loadedBookings.filter(b => b.id === bookingId);
  }

}
