import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Booking} from "../../services/model";
import {BookingResourceService} from "../../services/api-services/booking-resource.service";
import {QueryParams} from "../../services/api-services/base-resource.service";

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss'],
})
export class HistoryListComponent implements OnInit, OnChanges {
  bookings: Booking[] = [];
  @Input() showItem: boolean;
  @Input() clickable: boolean;
  @Input() filter: QueryParams = {};
  @Output() bookingClicked = new EventEmitter<Booking>()

  constructor(private bookingsService: BookingResourceService) { }

  ngOnInit() {
    this.fetchBookings(this.filter);
  }


  ngOnChanges(changes: SimpleChanges): void {
    if(changes.filter && !changes.filter.firstChange && this.filter){
      this.fetchBookings(this.filter);
    }
  }

  fetchBookings(filter: QueryParams) {
    this.bookingsService.getAllBookings(filter).subscribe((bookings) =>{
      this.bookings = bookings;
    })
  }


}
