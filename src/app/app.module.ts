import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormInputComponent } from './form-input/form-input.component';
import { ViwFormComponent } from './viw-form/viw-form.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';
import { FormsModule } from '@angular/forms';
import { FormDataService } from './form-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormInputComponent,
    ViwFormComponent,
    SubmitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
