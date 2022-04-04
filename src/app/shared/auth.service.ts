import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { of, switchMap } from 'rxjs';
import { from, Observable } from 'rxjs';
import { Users } from '../models/user';

import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<Users>;


  constructor( private afAuth : AngularFireAuth,
               private afs : AngularFirestore,
               private router : Router,
               private toast : HotToastService) { 

                // this.user$ = this.afAuth.authState.pipe(
                //   switchMap(user => {
                //     if(user) {
                //       this.afs.doc<Users>(`users/${user.uid}`).valueChanges();
                //     }  else {
                //       // Logged out
                //       return of(null);
                //     }
                //   })
                // )
                this.user = this.afAuth.authState.pipe(
                  switchMap(user => {
                    if (user) {
                      return this.afs.doc<Users>(`users/${user.uid}`).valueChanges()
                    } else {
                      return of(null)
                    }
                  })
                )
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
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  logOut() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['login'])
    })
  }

  private oAuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<Users> = this.afs.doc(`users/${user.uid}`);

    const data: Users = {
      uid: user.uid,
      lastName : user.lastName,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    return userRef.set(data)
  }
}
