import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterPageComponent } from '../register-page/register-page.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent extends RegisterPageComponent{
  loginUsers: any[] =[];
  loginObj: any = {
    userName: '',
    password: ''
  };

  onLogin(){
    if (this.loginObj.userName === '' || this.loginObj.password === '') {
      alert("Please fill in all the fields.");
      return; 
    }

    const isUserExist =this.registerUsers.find( m => m.userName == this.loginObj.userName && m.password== this.loginObj.password );
    if(isUserExist != undefined){
      this.loginUsers.push(this.loginObj);
      localStorage.setItem('loginUsers',JSON.stringify(this.loginUsers));
      this.loginObj = {
      userName: '',
      password: ''
    };
      alert('User Login Successfully');
      this.router.navigate(['homepage']);
    } else{
      alert('Invalid Username or Password');
    }
  }

}
