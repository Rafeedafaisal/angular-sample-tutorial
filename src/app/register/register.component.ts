import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// uname:string="bill gates"
user={ uname:"",email:"",mobile:"",username:"",password:""};
  constructor() { }

  ngOnInit(): void {

  }
  onSub(){
console.log(this.user.uname);
console.log(this.user.email);
console.log(this.user.mobile);
console.log(this.user.username);
console.log(this.user.password);

  }

}
