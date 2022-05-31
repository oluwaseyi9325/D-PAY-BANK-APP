// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getMessaging } from 'firebase/messaging'

import { collection, getDocs, getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAvZRk8f13ioBosN-EMZPG1JhdfW399TEo",
  authDomain: "userlist-1c033.firebaseapp.com",
  projectId: "userlist-1c033",
  storageBucket: "userlist-1c033.appspot.com",
  messagingSenderId: "1086543759614",
  appId: "1:1086543759614:web:53924b372b03449543fdaf",
  measurementId: "G-TZGFJJCQ3Z"
};

const idHistroy= {
  apiKey: "AIzaSyC768mPRw6dAxrtHrTv_fNag2V14BeRb1c",
  authDomain: "transactionhistrory.firebaseapp.com",
  projectId: "transactionhistrory",
  storageBucket: "transactionhistrory.appspot.com",
  messagingSenderId: "172124776048",
  appId: "1:172124776048:web:cbdeb28bd3b641483cf6b5",
  measurementId: "G-3MFWTLFMT2"
};

// Initialize Firebase
initializeApp(firebaseConfig,idHistroy);

const dp=getFirestore()
const collect=collection(dp,'customerslist')





// initializeApp(idHistroy);

const IDs=getFirestore()
const IdDetails=collection(IDs,'Idlist')



export { collect  }
export { IdDetails }