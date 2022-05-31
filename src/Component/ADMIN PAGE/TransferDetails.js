import { initializeApp } from "firebase/app";

import { collection, getDocs, getFirestore } from "firebase/firestore";

const idHistroy= {
    apiKey: "AIzaSyC768mPRw6dAxrtHrTv_fNag2V14BeRb1c",
    authDomain: "transactionhistrory.firebaseapp.com",
    projectId: "transactionhistrory",
    storageBucket: "transactionhistrory.appspot.com",
    messagingSenderId: "172124776048",
    appId: "1:172124776048:web:b59cc921496a42c03cf6b5",
    measurementId: "G-9E65N25WT6"
  };
  
  initializeApp(idHistroy);
  
  const IDs=getFirestore()
  const IdDetails=collection(IDs,'Idlist')

  export { IdDetails }