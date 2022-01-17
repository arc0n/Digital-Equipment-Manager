import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subject, Subscription} from "rxjs";
import {CommonStateService} from "../../services/common-state.service";

@Component({
  selector: 'app-qr-control',
  templateUrl: './qr-scan-control.component.html',
  styleUrls: ['./qr-scan-control.component.scss'],
})
export class QrScanControlComponent implements OnInit, OnDestroy {
  /** input for qr text input control */
  @Input() placeholder: string;

  /** shows or hides the continue button */
  @Input() showContinueButton = true

  /** shows or hides the scan qr button */
  @Input() showQrButton = true
  @Input() customStyles: {};

  /** shows or hides the continue button */
  @Input() resetControls: Subject<void>;

  /** emitted when the qr button was clicked*/
  @Output() onQrClick: EventEmitter<MouseEvent> = new EventEmitter();

  /** emitted when input value changes / user make a input */
  @Output() onValueInputChange: EventEmitter<string> = new EventEmitter();

  /** emits the input value every time the continue button was pressed */
  @Output() onContinueBtnClick: EventEmitter<string> = new EventEmitter();

  /** @internal */
  qrInputForm = new FormGroup({
    qrInputControl: new FormControl('')
  })

  private subscriptions: Subscription[] = []

  constructor(public stateService: CommonStateService) { }

  ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

  ngOnInit(): void {
    this.subscriptions.push(
      this.qrInputForm.get('qrInputControl').valueChanges.subscribe(value =>{
      this.onValueInputChange.emit(value);
    }));

    if(this.resetControls){
      this.resetControls.subscribe(()=>{
        this.qrInputForm.reset();
      })
    }

  }

  scanBtnClicked(event): void {
    this.onQrClick.emit(event)
  }

  continueButtonPressed(): void {
    this.onContinueBtnClick.emit(this.qrInputForm.get('qrInputControl').value)
  }

  getCustomStyles() {
    return this.customStyles
  }

}
