import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.component.html',
  styleUrls: ['./qr-scan.component.scss'],
})
export class QrScanComponent implements OnInit {
  @ViewChild('video', {static: true}) video: ElementRef;
  videoNativeElement: any;

  scanActive = true;
  scanResult = null;

  constructor() { }

  ngOnInit() {
    this.videoNativeElement = this.video?.nativeElement;
    console.log(this.videoNativeElement)
  }

  async startScan() {
    this.scanActive = true;
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true})
    this.videoNativeElement.srcObject = stream ;
      this.videoNativeElement.setAttribute('playsinline', true)
    this.videoNativeElement.play();
      requestAnimationFrame(this.scanCode.bind(this))
  }

scanCode(){

}

  stopScan() {
    this.scanActive = false;
  }

}
