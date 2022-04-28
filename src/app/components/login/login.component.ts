import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/shared/auth.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerForm : FormGroup;
  isSubmitted = false;

  isLogin : string;


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

  ngAfterViewInit() {
    // var current = null;
    // document.querySelector('#email').addEventListener('focus', function(e) {
    //   if (current) current.pause();
    //   current = anime({
    //     targets: 'path',
    //     strokeDashoffset: {
    //       value: 0,
    //       duration: 700,
    //       easing: 'easeOutQuart'
    //     },
    //     strokeDasharray: {
    //       value: '240 1386',
    //       duration: 700,
    //       easing: 'easeOutQuart'
    //     }
    //   });
    // });
    // document.querySelector('#password').addEventListener('focus', function(e) {
    //   if (current) current.pause();
    //   current = anime({
    //     targets: 'path',
    //     strokeDashoffset: {
    //       value: -336,
    //       duration: 700,
    //       easing: 'easeOutQuart'
    //     },
    //     strokeDasharray: {
    //       value: '240 1386',
    //       duration: 700,
    //       easing: 'easeOutQuart'
    //     }
    //   });
    // });
    // document.querySelector('#submit').addEventListener('focus', function(e) {
    //   if (current) current.pause();
    //   current = anime({
    //     targets: 'path',
    //     strokeDashoffset: {
    //       value: -730,
    //       duration: 700,
    //       easing: 'easeOutQuart'
    //     },
    //     strokeDasharray: {
    //       value: '530 1386',
    //       duration: 700,
    //       easing: 'easeOutQuart'
    //     }
    //   });
    // });
  }


  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }



loginUser(){
    if (!this.registerForm.valid) {
      return;
    }

    const { email, password } = this.registerForm.value;

    this.authService.login(email, password).pipe(
      this.toast.observe({
        success: 'Logged in successfully',
        loading: 'Logging in...',
      })
    ).subscribe((res) => {
      // const data = res;
      this.router.navigate(['/home']);
    })
  }

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
