import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  
})
export class FormInputComponent {
   userDetails:any = EventEmitter<any>
  constructor(private router:Router, private service:FormDataService){}

  saveForm (f:any) {
    this.service.formData.push(f.form.value)
    this.router.navigate(['view-form'])
    
  }
  
  
}
