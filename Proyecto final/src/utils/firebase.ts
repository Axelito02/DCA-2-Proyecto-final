import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { Usuario } from "../types/usuario";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveUsuarioInDB =async(usuario: Usuario) => {
    try {
        await addDoc(collection(db, "usuarios"), usuario);
        console.log("Document written in Firestore");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
};



export default {saveUsuarioInDB};