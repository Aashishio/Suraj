const firebaseConfig = {
  apiKey: "AIzaSyA4pOsULCU__qFidtyLRAbBiu1lYwd5bZQ",
  authDomain: "enter-8903f.firebaseapp.com",
  databaseURL: "https://enter-8903f-default-rtdb.firebaseio.com",
  projectId: "enter-8903f",
  storageBucket: "enter-8903f.appspot.com",
  messagingSenderId: "917167775952",
  appId: "1:917167775952:web:91d46a9033fb06c8b2fed5",
  measurementId: "G-391HG6CK5P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {
  input = document.getElementById("input").value;
  firebase.database().ref("/").child(input).update({
    purpose: "Adding User"
  });
}