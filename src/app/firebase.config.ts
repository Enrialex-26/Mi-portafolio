import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBmfZccZ1ibRbj82tsY-jdRff4AUpWINE0",
  authDomain: "enrique-portafolio.firebaseapp.com",
  projectId: "enrique-portafolio",
  storageBucket: "enrique-portafolio.firebasestorage.app",
  messagingSenderId: "704614723156",
  appId: "1:704614723156:web:4adeabedc4ef6f9c2cc7c1",
  measurementId: "G-N7110RMSGF"
};

export const app = initializeApp(firebaseConfig);

export async function getFirestoreInstance() {
  const { getFirestore } = await import('firebase/firestore');
  return getFirestore(app);
}