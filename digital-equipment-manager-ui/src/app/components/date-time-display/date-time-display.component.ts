import {
  Component, ElementRef, NgZone,
  OnDestroy, Renderer2,
  ViewChild,
} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-time-display',
  templateUrl: './date-time-display.component.html',
  styleUrls: ['./date-time-display.component.scss'],
})
export class DateTimeDisplayComponent implements OnDestroy {
  @ViewChild('timedisplay') myTimeDisplay: ElementRef;

  private interval: any;

  constructor(
    private zone: NgZone,
    private renderer: Renderer2,
  ) {
    this.zone.runOutsideAngular(() => {
      this.interval = setInterval(() => {
        this.renderer.setProperty(this.myTimeDisplay?.nativeElement, 'textContent', moment().format('HH:mm:ss'));
      }, 1);
    })
  }

  ngOnInit() {
  }


  ngOnDestroy(): void {
    this.interval?.clear();
  }

}
