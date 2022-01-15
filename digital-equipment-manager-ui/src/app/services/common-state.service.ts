import { Injectable } from '@angular/core';
import {BehaviorSubject, from, Observable} from "rxjs";
import {StorageService} from "./storage.service";


const IP_KEY = 'server_ip';
const PORT_KEY = 'server_port';

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

  constructor(private storageSrv: StorageService) {
      this.getStoredConnectionData()
  }

  protected getStoredConnectionData() {
    return from(Promise.all([
        this.storageSrv?.get(IP_KEY),
        this.storageSrv?.get(PORT_KEY)
      ])
    ).subscribe(([ip,port]) => {
      this.setServerConfig({ip:ip || 'localhost', port: port || 3000});
    });
  }

  setSplitPaneVisible(isVisible: boolean): void {
    this.splitPaneVisible$.next(isVisible);
  }

  getSplitPaneVisible(): Observable<boolean> {
    return this.splitPaneVisible$.asObservable();
  }

  async setServerConfig(config: { ip, port }): Promise<any> {
      await Promise.all([
        this.storageSrv.set(IP_KEY, config.ip),
        this.storageSrv.set(PORT_KEY, config.port)
      ]);
    this.serverConfigChanged$.next(config);
  }

  getServerConfigObservable(): Observable<{ip, port}> {
    return this.serverConfigChanged$.asObservable();
  }




}
