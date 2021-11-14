import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Booking, Item, Person} from "../model";
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
  postBooking(booking: Booking): Observable<Booking>{
    return this.post(booking, {})
  }
}
