import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: 'AIzaSyDcBq3vujmaQg8SKQZK3GKsnYq3hgTxMuU',
  authDomain: 'client-manager-b3c62.firebaseapp.com',
  databaseURL: 'https://client-manager-b3c62.firebaseio.com',
  projectId: 'client-manager-b3c62',
  storageBucket: 'client-manager-b3c62.appspot.com',
  messagingSenderId: '699021701851',
  appId: '1:699021701851:web:1e8ce1900afdfcbfe712fe',
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.app = app.database();
  }
}

export default new Firebase();
