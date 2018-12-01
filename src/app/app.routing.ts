import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Angular2TokenService } from 'angular2-token';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenuComponent } from './shared/menu/menu.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
// 


import { ManagementPanelComponent } from './management/management-panel/management-panel.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: ManagementPanelComponent }, 
  { path: 'management-panel', component: ManagementPanelComponent},
  {
    path: '',
    outlet: 'navbar',
    component: NavbarComponent
  }, 
  {
    path: '',
    outlet: 'menu',
    component: MenuComponent
  }, 
  {
    path: '',
    outlet: 'breadcrumb', 
    component: BreadcrumbComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);