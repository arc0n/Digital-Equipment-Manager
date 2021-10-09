import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.page.html',
  styleUrls: ['./employee-dashboard.page.scss'],
})
export class EmployeeDashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onScanClicked(event: MouseEvent) {
    console.log(event)

  }

  onValueChange(event: string) {
    console.log(event)
  }
}
