import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app'
// import 'firebase/compat/messaging'
import { BehaviorSubject, Subject } from 'rxjs';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';



export class Message {
  content: string;
  style : string;
  dismissed : boolean = false;

  constructor(content, style?) {
    this.content = content;
    this.style = style;
  }

}


@Injectable({
  providedIn: 'root'
})
export class RoverNotificationsService {

  
  // private messaging = firebase.messaging();

  private messageSource = new Subject()
  currentMessage = this.messageSource.asObservable()

  // currentMessage = new BehaviorSubject(null)

  constructor( 
    private afs : AngularFirestore, 
    public afm : AngularFireMessaging, 
    private afAuth: AngularFireAuth,
    private db : AngularFireDatabase) {
    // this.afm.messages.subscribe((res) => {
    //   console.log(res);
    // })
   }

  //  requestPermission() {
  //   this.afm.requestToken.subscribe(
  //     (token) => {
  //       console.log(token);
  //     },
  //     (err) => {
  //       console.error('Unable to get permission to notify.', err);
  //     }
  //   );
  // }

  // receiveMessage() {
  //   this.afm.messages.subscribe(
  //   (payload) => {
  //     console.log("new message received. ", payload);
  //     this.currentMessage.next(payload);
  //   })
  // }

  // private saveToken(user, token): void {
  //   const currentTokens = user.fcmTokens || { }
  //   console.log(currentTokens, token);

  //   if(!currentTokens[token]) {
  //     const userRef = this.afs.collection('users').doc(user.uid);
  //     const tokens = { ...currentTokens, [token]: true }
  //     userRef.update({fcmTokens : tokens });
  //   }
  // }


  // getPermission(user) {
  //   this.messaging.requestPermission
  // }


  // receiveMessage() {
  //   this.messaging.onMessage(payload => {
  //     console.log('Received', payload);
  //     this.notifications.next(payload);
  //   })
  // }

  // private saveToken(user, token): void {
  //   const currTokens = user.fcmTokens || { }
  //   console.log(currTokens, token);

  //   if (!currTokens[token]) {
  //     const userRef = this.afs.collection('users').doc(user.uid)
  //     const tokens = { ...currTokens, [token]: true }
  //     userRef.update({ fcmTokens: tokens })
  //   }
  // }


  getMessages(): AngularFireList<Message[]> {
    return this.db.list('nodeMCU', ref => ref.orderByKey().limitToLast(5));
  }

  sendMessage(content, style) {
    const message = new Message(content, style);
    this.db.list('nodeMCU').push(message);
  }

  dismissedMessagge(messageKey) {
    this.db.object(`nodeMCU/${messageKey}`).update({'dismissed' : true})
  }
}
