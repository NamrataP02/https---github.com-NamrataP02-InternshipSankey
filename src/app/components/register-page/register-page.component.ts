import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements  OnInit  {
 registerUsers: any[] =[];
   registerObj: any = {
    userName: '',
    email: '',
    password: ''
  };
  

  
  constructor(public router:Router) { }
  ngOnInit(): void {
    const localData = localStorage.getItem('registerUsers');
    if(localData != null){
      this.registerUsers = JSON.parse(localData);
    }

  }
  onSignUp(){
    if (this.registerObj.userName === '' || this.registerObj.email === '' || this.registerObj.password === '') {
      alert("Please fill in all the fields.");
      return; 
    }
    this.registerUsers.push(this.registerObj);
    localStorage.setItem('registerUsers',JSON.stringify(this.registerUsers));
    this.registerObj = {
      userName: '',
      email: '',
      password: ''
    };    
    alert("Regsiteration Done successfully");
  }
}
