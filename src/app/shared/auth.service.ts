import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users$ : Observable<any>;


  constructor( private auth : AngularFireAuth,
               private afs : AngularFirestore,
               private router : Router,
               private toast : HotToastService) { 

                // this.users$ = this.auth.authState.pipe(
                //   switchMap(users => {
                //     if(users) {
                //       this.afs.doc<User>(`users/${}`)
                //     }
                //   })
                // )
               }


  //  loginWithUser(email: string, password: string) {
  //    return this.auth.signInWithEmailAndPassword(email,password).then(() => {
  //      localStorage.setItem('token', 'true');
  //      this.router.navigate(['/page'])
  //    }, err => {
  //      alert(err.message);
  //      this.router.navigate(['/login']);
  //    })
  //  }

  login(email: string, password: string): Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(email, password));
  }

  logOut() {
    return this.auth.signOut().then(() => {
      this.router.navigate(['login'])
    })
  }
}
