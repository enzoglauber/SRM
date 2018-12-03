import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDebugComponent } from './form-debug/form-debug.component';

import { CoreService } from './resources/core.service';
import { NavbarService } from './resources/navbar.service';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, FontAwesomeModule
  ],
  declarations: [FormDebugComponent, NavbarComponent, MenuComponent, BreadcrumbComponent],
  providers: [CoreService, NavbarService], 
})
export class SharedModule { }
