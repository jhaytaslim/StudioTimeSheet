import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC_tobqaLFGsBpnn-HOcYxk_RaGAYMDctM",
    authDomain: "about-b7119.firebaseapp.com",
    databaseURL: "https://about-b7119.firebaseio.com",
    projectId: "about-b7119",
    storageBucket: "about-b7119.appspot.com",
    messagingSenderId: "410865965878"
  };
 // firebase.initializeApp(config);

  
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();




// import * as firebase from 'firebase';

// const prodConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTH_DOMAIN,
//   databaseURL: YOUR_DATABASE_URL,
//   projectId: YOUR_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
// };

// const devConfig = {
//   apiKey: YOUR_API_KEY,
//   authDomain: YOUR_AUTH_DOMAIN,
//   databaseURL: YOUR_DATABASE_URL,
//   projectId: YOUR_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: YOUR_MESSAGING_SENDER_ID,
// };

// const config = process.env.NODE_ENV === 'production'
//   ? prodConfig
//   : devConfig;

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }

// const auth = firebase.auth();

// export {
//   auth,
// };

export {
  auth,
};