import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Person} from "../model";
import {BaseResourceService} from "./base-resource.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {StorageService} from "../storage.service";
import {CommonStateService} from "../common-state.service";

@Injectable()
export class PersonResourceService extends BaseResourceService<Person> {
  entityUrl = "/person";

  constructor(protected http: HttpClient, protected storageSrv: StorageService, stateSrv: CommonStateService) {
    super(http, storageSrv, stateSrv);
  }

  getPersonByName(searchString: string): Observable<Person[]> {
    return this.getList({name: searchString});
  }

  getPersonByCode(code: string): Observable<Person | string> {
    return this.getByID(code, {});
  }

  getAllPersons(): Observable<Person[]> {
    return this.getList({});
  }

  postPerson(person: Person): Observable<boolean | string> {

    return this.post(person, {}).pipe(
      map(res => {
        if ((res as { id: string })?.id) {
          return (res as { id: string })?.id
        }
        return res as string
      }))
  }


}
