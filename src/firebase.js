  import firebase from 'firebase';

  import 'firebase/firestore';

  
  var firebaseConfig = {
    apiKey: "AIzaSyCzpQkHwUnpam2lBFu9SXYbEOQzXoNOEso",
    authDomain: "novel-46207.firebaseapp.com",
    databaseURL: "https://novel-46207.firebaseio.com",
    projectId: "novel-46207",
    storageBucket: "novel-46207.appspot.com",
    messagingSenderId: "951514129891",
    appId: "1:951514129891:web:870c9d36105a48030c2cd6",
    measurementId: "G-JX5GTGC51S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;