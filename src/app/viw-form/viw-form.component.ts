import { Component } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-viw-form',
  templateUrl: './viw-form.component.html',
  styleUrls: ['./viw-form.component.css'],
})
export class ViwFormComponent {
  constructor(private service:FormDataService){    
  }
userDetails:any = this.service.formData
  
}
