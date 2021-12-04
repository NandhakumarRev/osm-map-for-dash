import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    DepartmentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
