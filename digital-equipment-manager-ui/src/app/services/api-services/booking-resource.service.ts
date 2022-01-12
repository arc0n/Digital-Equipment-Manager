import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Booking, } from "../model";
import {BaseResourceService, QueryParams} from "./base-resource.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {StorageService} from "../storage.service";
import {CommonStateService} from "../common-state.service";

@Injectable()
export class BookingResourceService extends BaseResourceService<Booking>{
  entityUrl = "/booking";

  constructor(protected http: HttpClient, protected storageSrv: StorageService, stateSrv: CommonStateService) {
    super(http, storageSrv, stateSrv);
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
