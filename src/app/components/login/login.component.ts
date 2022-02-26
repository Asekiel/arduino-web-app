import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerForm : FormGroup;


  constructor( private authService : AuthService,
               private auth : AngularFireAuth,
               private formBuilder : FormBuilder,
               private toast : HotToastService,
               private router : Router) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }


  loginUser() {

    const { email, password } = this.registerForm.value; 
    this.authService.login(email, password).pipe(
      this.toast.observe({
        success: 'Successfully Entered the credentials',
        loading: 'Logging in...',
        error: ({ message }) => `There was an error: ${message} `
      })
    ).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  // get email() {
  //   return this.loginForm.get('email');
  // }

  // get password() {
  //   return this.loginForm.get('password');
  // }

  // loginUser() {
  //   if(!this.loginForm.validator){
  //     return;
  //   }

  //   const { email, password } = this.loginForm.value;
  //   this.auth.loginWithUser(email, password).then(res => {
  //     if(res.users.uid) {

  //     }
  //   })
  // }

  // loginUser(){
  //   if (!this.loginForm.valid) {
  //     return;
  //   }

  //   const { email, password } = this.loginForm.value;
  //   this.auth.login(email, password).pipe(
  //     this.toast.observe({
  //       success: 'Logged in successfully',
  //       loading: 'Logging in...',
  //       error: ({ message }) => `There was an error: ${message} `
  //     })
  //   ).subscribe(() => {
  //     this.router.navigate(['/homepage']);
  //   });
  // }
}
