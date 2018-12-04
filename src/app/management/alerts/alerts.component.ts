import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ActionService } from '../../shared/resources/action.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlertsComponent implements OnInit {

  private actions: Array<any> = [];

  constructor(
    private ActionService: ActionService
  ) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.actions = [];
    this.ActionService.list().subscribe(data => {
      for (const item of data) {
        this.actions.push(item);
      }
    });
  }
}
