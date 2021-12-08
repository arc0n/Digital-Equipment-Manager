import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Booking, } from "../model";
import {BaseResourceService, QueryParams} from "./base-resource.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

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
  getBookingsByItem(itemId: string, params: QueryParams): Observable<Booking[]> {
    return this.getList({...params, item_id: itemId});
  }
  postBooking(booking: Booking): Observable<boolean | string>{
    return this.post(booking, {}).pipe(map(res => res as string | boolean))
  }

  putBooking(booking: Booking): Observable<boolean | string>{
    return this.put( booking, {})
  }
}
