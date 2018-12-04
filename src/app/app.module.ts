import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2TokenService } from 'angular2-token';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { fas } from '@fortawesome/free-solid-svg-icons'; 
library.add(fas);

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
    FontAwesomeModule,
    ManagementModule,
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas);
  }
}
