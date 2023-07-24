import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {
  constructor(private router:Router){}
  onSaveForm(){
    this.router.navigate(['view-form'])
  }
}
