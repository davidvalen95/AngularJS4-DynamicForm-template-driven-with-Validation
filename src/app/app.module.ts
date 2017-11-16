import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule} from '@angular/forms';
import { ShowErrorSecondComponent } from './forms/show-errors/show-error-second.component';
import { StyleStackComponent } from './forms/style-stack/style-stack.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowErrorSecondComponent,
    StyleStackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
