import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {of, Subscription} from "rxjs";
import {CommonStateService} from "../../services/common-state.service";
import {ToastController} from "@ionic/angular";
import {FormControl, FormGroup} from "@angular/forms";
import {catchError, debounceTime, take} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-connection-page',
  templateUrl: './connection-page.page.html',
  styleUrls: ['./connection-page.page.scss'],
})
export class ConnectionPagePage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  /** @internal */
  showMobileMenu = true;

  /** @internal */
  connectionForm = new FormGroup({
    serverIpAddr: new FormControl(''),
    serverPort: new FormControl(''),
  })

  /** @internal */
  isConnected = false;

  /** @internal */
  testSuccessful = null;

  /** @internal */
  disableButtons = false;

  /** @internal */
  isLoading = false;

  constructor(
    public router: Router,
    public state: CommonStateService,
    private toastController: ToastController,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.state.getSplitPaneVisible().subscribe(
        (isVisible) => this.showMobileMenu = !isVisible)
    )

    this.state.getServerConfig().pipe(take(1)).subscribe( serverUrl => {
      this.triggerConnectionTest(serverUrl.ip, serverUrl.port);
      this.connectionForm.patchValue({'serverIpAddr': serverUrl.ip,'serverPort': serverUrl.port}, {emitEvent: false})
    });

    this.subscriptions.push(
      this.connectionForm.valueChanges
        .pipe(debounceTime(1000))
        .subscribe((rawVal) => {
          this.triggerConnectionTest(rawVal.serverIpAddr, rawVal.serverPort);
        })
    )
  };

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }



  triggerConnectionTest(ip: string, port: number) {
    this.http.get(this.getServerString(ip,port)+'/ping').pipe(
      catchError((error) => {
        return of(false);
      })
    ).subscribe( res => {
      if(res) {
        this.testSuccessful = true;
        this.state.setServerConfig(
          {ip, port}
        );
      } else {
        this.testSuccessful = false;
      }
    });
  }

  private getServerString(serverIpAddr: string, serverPort: number) {
    return `http://${serverIpAddr}:${serverPort}`;
  }
}
