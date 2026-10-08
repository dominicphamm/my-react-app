 import { initializeApp } from 'firebase/app'
   import { getFirestore } from 'firebase/firestore'
   import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAbXY4VNcA-sj8kcBKnL--wUHr2cawV2Ig",
    authDomain: "my-react-app-b4015.firebaseapp.com",
    projectId: "my-react-app-b4015",
    storageBucket: "my-react-app-b4015.firebasestorage.app",
    messagingSenderId: "428933436625",
    appId: "1:428933436625:web:a63b733aef20ac4d0e21f0"
};

   const app = initializeApp(firebaseConfig)
   const db = getFirestore(app)
   const auth = getAuth(app)

   export { db, auth }