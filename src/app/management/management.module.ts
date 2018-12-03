import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementPanelComponent } from './management-panel/management-panel.component';
import { SharedModule } from '../shared/shared.module';
import { AlertsComponent } from './alerts/alerts.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
@NgModule({
  imports: [
    CommonModule, SharedModule, FontAwesomeModule
  ],
  declarations: [ManagementPanelComponent, AlertsComponent, ShortcutsComponent]
})
export class ManagementModule { }
