import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {LoadingController} from "@ionic/angular";
import jsQR from 'jsqr'

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.component.html',
  styleUrls: ['./qr-scan.component.scss'],
})
export class QrScanComponent implements OnInit {
  @Input() cancelClicked: () => any = () => {
  }
  @Input() qrCodeRead: (code: string) => any = () => {
  }


  @ViewChild('video', {static: true}) video: ElementRef;
  @ViewChild('canvas', {static: true}) canvas: ElementRef;
  videoNativeElement: HTMLVideoElement;
  canvasNativeElement: HTMLCanvasElement;
  canvasContext: CanvasRenderingContext2D;

  scanActive = true;
  loading: HTMLIonLoadingElement;


  constructor(private loadingCtl: LoadingController) {
  }

  ngOnInit() {
    this.videoNativeElement = this.video?.nativeElement;
    this.canvasNativeElement = this.canvas?.nativeElement;
    this.canvasContext = this.canvasNativeElement.getContext("2d")

    this.startScan();

  }

  async startScan() {
    this.loading = await this.loadingCtl.create();
    await this.loading.present();

    this.videoNativeElement.srcObject = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'environment'
      },

    });

    this.videoNativeElement.setAttribute('playsinline', 'true') // to not get fullscrean on ios
    await this.videoNativeElement.play();


    this.scanActive = true;
    requestAnimationFrame(this.scanCode.bind(this))
  }

  async scanCode() {
    if (!this.scanActive) return;
    if (this.videoNativeElement.readyState === this.videoNativeElement.HAVE_ENOUGH_DATA) {
      if (await this.loading) {
        this.loading.dismiss();
      }

      this.canvasNativeElement.height = this.videoNativeElement.videoHeight;
      this.canvasNativeElement.width = this.videoNativeElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoNativeElement,
        0, 0,
        this.canvasNativeElement.width,
        this.canvasNativeElement.height
      )

      const imageData = this.canvasContext.getImageData(
        0, 0,
        this.canvasNativeElement.width,
        this.canvasNativeElement.height
      )

      const code = this.processImageData(imageData);
      if (code) {
        this.stopScan()
        this.qrCodeRead(code.data);
        return
      }

    }
    requestAnimationFrame(this.scanCode.bind(this))

  }

  stopScan() {
    this.scanActive = false;
    if (!!this.videoNativeElement.srcObject && "getTracks" in this.videoNativeElement.srcObject) {
      const tracks = this.videoNativeElement.srcObject.getTracks();
      tracks.forEach(track => track.stop())
    }
  }

  private processImageData(imageData: ImageData) {
    return jsQR(imageData.data, imageData.width, imageData.height, {});
  }

  cancelBtnClicked(): void {
    this.stopScan();
    this.cancelClicked();
  }

  onContinueButtonClicked(event: string) {
    console.log(event)
    this.stopScan()
    this.qrCodeRead(event);
    return
  }
}
