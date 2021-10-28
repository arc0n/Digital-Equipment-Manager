import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Person, Item} from "../model";
import {BaseResourceService} from "./base-resource.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PersonResourceService extends BaseResourceService<Person>{

  constructor(protected http: HttpClient) {
    super(http);
    this.baseUrl = this.baseUrl +"/person";
  }

  getPersonByName(searchString:string): Observable<Person> {
    // TODO not correctyl implemented
    return this.getByID(searchString,{});
  }
  getPersonByCode(code:string): Observable<Person> {
    return this.getByID(code,{});
  }
  getAllPersons(): Observable<Person[]> {
    return this.getList({});
  }
  postPerson(person: Person): Observable<Person>{
    return this.post(person, {})
  }
}
