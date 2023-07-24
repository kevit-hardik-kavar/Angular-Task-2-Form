import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormInputComponent } from './form-input/form-input.component';
import { ViwFormComponent } from './viw-form/viw-form.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'form', component:FormInputComponent},
  {path:'view-form', component:ViwFormComponent},
  {path:'submit-form', component:SubmitFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
