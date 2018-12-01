import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2TokenService } from 'angular2-token';

import { routing } from './app.routing';

import { SharedModule } from './shared/shared.module';
import { ManagementModule } from './management/management.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    routing,
    BrowserModule,
    RouterModule,
    HttpModule,
    SharedModule,
    BrowserAnimationsModule,
    ManagementModule,
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
