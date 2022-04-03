importScripts('https://www.gstatic.com/firebasejs/4.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.6.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAyogYx29Sfp5QEM6MKuLhrOV-Aq0i88uM",
    authDomain: "rover-19.firebaseapp.com",
    databaseURL: "https://rover-19-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "rover-19",
    storageBucket: "rover-19.appspot.com",
    messagingSenderId: "226962855215",
    appId: "1:226962855215:web:f8a654b4b0ede9f12ffdda",
    measurementId: "G-NH8Z9LDFZD"
})

const message = firebase.messaging();