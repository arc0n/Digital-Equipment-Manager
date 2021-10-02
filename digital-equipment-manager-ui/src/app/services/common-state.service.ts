import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonStateService {

  /**
   * holds the current state of visibility of the main navigation sidebar / ionic split pane
   * @private
   */
  private splitPaneVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  setSplitPaneVisible(isVisible: boolean): void {
    this.splitPaneVisible$.next(isVisible);
  }

  getSplitPaneVisible(): Observable<boolean> {
    return this.splitPaneVisible$.asObservable();
  }




}
