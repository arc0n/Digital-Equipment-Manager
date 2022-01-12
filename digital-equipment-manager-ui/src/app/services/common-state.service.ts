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

  /**
   * holds the current state of visibility of the main navigation sidebar / ionic split pane
   * @private
   */
  private serverConfigChanged$: BehaviorSubject<{ip: string, port: number}> = new BehaviorSubject<{ ip: string, port: number }>({ip: 'localhost', port: 3000});

  constructor() { }

  setSplitPaneVisible(isVisible: boolean): void {
    this.splitPaneVisible$.next(isVisible);
  }

  getSplitPaneVisible(): Observable<boolean> {
    return this.splitPaneVisible$.asObservable();
  }

  setServerConfig(config: { ip, port }): void {
    this.serverConfigChanged$.next(config);
  }

  getServerConfig(): Observable<{ip, port}> {
    return this.serverConfigChanged$.asObservable();
  }




}
