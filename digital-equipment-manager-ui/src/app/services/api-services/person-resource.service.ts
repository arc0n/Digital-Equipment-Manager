import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Person, Item} from "../model";
import {BaseResourceService} from "./base-resource.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class PersonResourceService extends BaseResourceService<Person>{

  constructor(protected http: HttpClient) {
    super(http);
    this.baseUrl = this.baseUrl +"/person";
  }

  getPersonByName(searchString:string): Observable<Person[]> {
    return this.getList({name: searchString});
  }
  getPersonByCode(code:string): Observable<Person | string> {
    return this.getByID(code,{});
  }
  getAllPersons(): Observable<Person[]> {
    return this.getList({});
  }
  postPerson(person: Person): Observable<boolean | string>{
    return this.post(person, {}).pipe(map(res => res as string))
  }
}
