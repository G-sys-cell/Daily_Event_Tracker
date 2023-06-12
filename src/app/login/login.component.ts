import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}
  username!: string;
  password!: string;
  login(){
  if (this.username === "admin" && this.password ==="admin") {
      this.router.navigate(['/adminhomepage']);
    } 
  else if (this.username === 'user' && this.password === 'user') {
  this.router.navigate(['/userhomepage']);
    } 
  else 
    {
    alert('Invalid username or password');
  }
  }
}

