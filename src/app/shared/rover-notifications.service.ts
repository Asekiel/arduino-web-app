import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app'
import { Subject } from 'rxjs';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Injectable({
  providedIn: 'root'
})
export class RoverNotificationsService {

  private messaging = firebase.messaging();

  private notifications = new Subject();
  currentmessage = this.notifications.asObservable();

  constructor( private afs : AngularFirestore, private afm : AngularFireMessaging) { }


  getPermission(user) {
    const messaging = getMessaging() 

    this.messaging
  }


  receiveMessage() {
    this.messaging.onMessage(payload => {
      console.log('Received', payload);
      this.notifications.next(payload);
    })
  }

  private saveToken(user, token): void {
    const currTokens = user.fcmTokens || { }
    console.log(currTokens, token);

    if (!currTokens[token]) {
      const userRef = this.afs.collection('users').doc(user.uid)
      const tokens = { ...currTokens, [token]: true }
      userRef.update({ fcmTokens: tokens })
    }
  }
}
