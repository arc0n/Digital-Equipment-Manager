import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-qr-control',
  templateUrl: './qr-scan-control.component.html',
  styleUrls: ['./qr-scan-control.component.scss'],
})
export class QrScanControl implements OnInit {
  @Input() placeholder: string;

  @Output() onQrClick: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() onContinueBtnClick: EventEmitter<string> = new EventEmitter();
  qrInputControlValue: string;



  constructor() { }

  ngOnInit() {}

  scanBtnClicked(event) {
    this.onQrClick.emit(event)
  }

  continueButtonPressed() {
    this.onContinueBtnClick.emit(this.qrInputControlValue)
  }
}
