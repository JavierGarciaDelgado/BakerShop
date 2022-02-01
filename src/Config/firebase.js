import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
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
let uid = "no user";

onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid;
  }
});

export const loginWithGoogle = () => {
  signInWithPopup(auth, GoogleProvider);
}; //Exportamos el loginwithgoogle para posteriormente utilizarlo en login.js

export const CreateWithEmail = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password);
}; // crea el usuario con email

export const LoginWithPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
}; // logea con el email

export const getUserId = () => {
  return uid;
};

export const logout = () => {
  signOut(auth);
};

//STORAGE

export const uploadImage = (file) => {
  console.log(file.name)
  const refer = ref(storage,`img/${file.name}`)
  const result = uploadBytesResumable(refer,file)
  return result
}
