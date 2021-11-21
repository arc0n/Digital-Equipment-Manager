import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Booking, BookingList, Item, Person} from "../model";
import {BaseResourceService, QueryParams} from "./base-resource.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BookingResourceService extends BaseResourceService<Booking>{

  constructor(protected http: HttpClient) {
    super(http);
    this.baseUrl = this.baseUrl +"/booking";
  }

  getAllBookings(params: QueryParams): Observable<Booking[]> {
    return this.getList(params);
  }

  getBookingsByPerson(personId: string, params: QueryParams): Observable<Booking[]> {
    return this.getList({...params, person_id: personId});
  }
  postBooking(booking: Booking): Observable<boolean | string>{
    return this.post(booking, {})
  }

  putBooking(booking: Booking): Observable<boolean | string>{
    return this.put(booking, {})
  }
}
