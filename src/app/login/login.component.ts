import { Component } from '@angular/core';
import{ FormBuilder,Validators} from '@angular/forms';
import{ ToastrService} from 'ngx-toastr'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private toastr:ToastrService
   , private router:Router){
    }
  username: string = '';
  password: string = '';

  login() {
    if (this.username === 'Bushra' && this.password === '12345') {
      alert('Login successful!'); 
      this.router.navigate(['/dashbord']);
    } else {
      alert('Login failed. Please check your username and password.');
    }
  }


navigateToProfile() {
  this.router.navigate(['/jobSeeker/profile']);
}
}


