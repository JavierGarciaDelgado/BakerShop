import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCORr742vl84ftpy4h5iOB9PhACuqp1oX0",
  authDomain: "bakershop-327919.firebaseapp.com",
  projectId: "bakershop-327919",
  storageBucket: "bakershop-327919.appspot.com",
  messagingSenderId: "1090666224208",
  appId: "1:1090666224208:web:d91023b1fae8d5b72b8f55",
}; //configuración de nuestro firebase

export const app = initializeApp(firebaseConfig); //llamamos a la funcion para hacer el start del firebase
const storage = getStorage(app);

const GoogleProvider = new GoogleAuthProvider(); //creamos un proveedor que nos permite registrarnos

const auth = getAuth(app); //Nos permite usar todas las funciones de autenticación de firebase
const user = auth.currentUser;

let uid = "no user";
let email = "no email"

onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid;
    email = user.email
  }
});

export const loginWithGoogle = () => {
  signInWithPopup(auth, GoogleProvider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // The email of the user's account used.
    const email = error.email;
    alert(email)
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    alert(credential)
    // ...
})}; //Exportamos el loginwithgoogle para posteriormente utilizarlo en login.js

export const CreateWithEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
})}; // crea el usuario con email

export const LoginWithPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  })}; // logea con el email

export const getUserDisplayName = () => {
  if (user !== null) {
    const displayName = user.displayName;
    return displayName
  
  }
}

export const getUserEmail = () => {
    return email
}

export const updateEmail = (email) => {
  updateEmail(auth.currentUser, email).then(() => {
    // Email updated!
    // ...
  }).catch((error) => {
    // An error occurred
    // ...
  });
}

export const getUserPhotoURL = () => {
  if (user !== null) {
    const photoURL = user.photoURL;
    return photoURL

  }
}

export const getUserVerified = () => {
  if (user !== null) {
    const emailVerified = user.emailVerified;
    return emailVerified

  }
}


export const getUserId = () => {
  return uid;
};

export const logout = () => {
  signOut(auth);
};

//STORAGE

export const uploadImage = (file) => {
  const refer = ref(storage, `img/${file.name}`);
  const result = uploadBytesResumable(refer, file);
  return result
};

export const downloadImage = (image) => {
  const starsRef = ref(storage, `img/${image}`);
  const URL = getDownloadURL(starsRef);
  return URL;
};
