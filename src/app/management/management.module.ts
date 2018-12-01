import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementPanelComponent } from './management-panel/management-panel.component';
import { SharedModule } from '../shared/shared.module';
import { AlertsComponent } from './alerts/alerts.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
@NgModule({
  imports: [
    CommonModule, SharedModule,
  ],
  declarations: [ManagementPanelComponent, AlertsComponent, ShortcutsComponent]
})
export class ManagementModule { }
