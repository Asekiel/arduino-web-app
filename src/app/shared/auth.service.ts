import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { of, switchMap } from 'rxjs';
import { from, Observable } from 'rxjs';

import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // user: Observable<Users>;

  // userCollection : AngularFirestoreCollection<Users>


  constructor( private afAuth : AngularFireAuth,
               private afs : AngularFirestore,
               private router : Router,
               private toast : HotToastService ) { 

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
                // this.user = this.afAuth.authState.pipe(
                //   switchMap(user => {
                //     if (user) {
                //       return this.afs.doc<Users>(`users/${user.uid}`).valueChanges()
                //     } else {
                //       return of(null)
                //     }
                //   })
                // )
      }


  // login(email: string, password: string): Observable<any> {
  //   return from(this.afAuth.signInWithEmailAndPassword(email, password));
  // }

  login(email: any, password: any): Observable<any> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password))
  }



  logOut() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['login'])
    })
  }

  private oAuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((credential) => {
        // this.updateUserData(credential.user)
      })
  }

  // private updateUserData(user) {
  //   // Sets user data to firestore on login

  //   const userRef: AngularFirestoreDocument<Users> = this.afs.doc(`users/${user.uid}`);

  //   const data: Users = {
  //     uid: user.uid,
  //     lastName : user.lastName,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL
  //   }

  //   return userRef.set(data)
  // }
}
