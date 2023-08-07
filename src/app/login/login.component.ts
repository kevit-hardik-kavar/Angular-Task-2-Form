import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
  userName:any= localStorage.getItem('username')
  
  
  formData:any
  constructor(private route:Router){}
  
  onLogin(f:any){
    localStorage.setItem('username',f.form.value.username)
    localStorage.setItem('password',f.form.value.password)
    if(f.form.status == 'VALID'){
      this.route.navigate(['form'])
    }
  }

}
