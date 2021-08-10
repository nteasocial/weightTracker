function login() {
  window.alert("working@!");
}
function login(){
  const userEmail = document.getElementById("txtEmail").value;
  const userPass = document.getElementById("txtPassword").value;
  var a = document.createElement('a');
  a.appendChild(link);
  a.href="https://jovial-mestorf-4522db.netlify.app/";
  document.body.appendChild(a);
}
(function () {
  const firebaseConfig = {
    apiKey: "AIzaSyADiuxW6C2A6Gv_FqYg_2fkl819zEEYLSE",
    authDomain: "weight-tracker-1823c.firebaseapp.com",
    projectId: "weight-tracker-1823c",
    storageBucket: "weight-tracker-1823c.appspot.com",
    messagingSenderId: "613463631078",
    appId: "1:613463631078:web:a748b8943fb190b6f94727",
    measurementId: "G-F2YGNFG48P",
  };

  firebase.initializeApp(config);

  // Get the elements

  const txtEmail = document.getElementById("txtEmail");
  const txtpassword = document.getElementById("txtpassword");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignUp = document.getElementById("btnSignUp");
  const btnLogout = document.getElementById("btnLogout");

  // add login event
  btnLogin.addEventListener("click", (e) => {
    // get email and pass
    const email = txtEmail.value;
    const pass = txtpassword.value;
    const auth = firebase.auth();
    // sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch((e) => console.log(e.message));
  });

  // sign-up
  btnSignUp.addEventListener("click", (e) => {
    // get email and pass
    const email = txtEmail.value;

    const pass = txtpassword.value;
    const auth = firebase.auth();

    // sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  // realtime listener
  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove("hide");
    } else {
      console.log("not logged in");
      btnLogout.classList.add("hide");
    }
  });

  // logout

  btnLogout.addEventListener("click", (e) => {
    firebase.auth().signOut();
  });
});
