import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SharedModule } from '../shared/shared.module';

import { ManagementPanelComponent } from './management-panel/management-panel.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';

@NgModule({
  imports: [
    CommonModule, SharedModule, FontAwesomeModule, BsDropdownModule.forRoot()
  ],
  declarations: [ManagementPanelComponent, AlertsComponent, ShortcutsComponent]
})
export class ManagementModule { }
