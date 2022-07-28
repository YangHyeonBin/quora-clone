import firebase from 'firebase';

// configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH7GgHow76jUlMKJNHvuSLuPDCkdrVuCA",
  authDomain: "quora-clone-68745.firebaseapp.com",
  projectId: "quora-clone-68745",
  storageBucket: "quora-clone-68745.appspot.com",
  messagingSenderId: "147712016199",
  appId: "1:147712016199:web:5d739a4f93e35f84e21662",
  measurementId: "G-6CYPVEVT80"
};

// initialize firebase
const firebaseApp = firebase.initailizeApp(firebaseConfig);

// 로그인
const auth = firebase.auth();

// 구글 로그인
const provider = new firebase.auth.GoogleAuthProvider();

// 데이터베이스
const db = firebaseApp.firestore();

export { auth, provider };

export default db;