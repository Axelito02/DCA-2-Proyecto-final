import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { Usuario } from "../types/usuario";
import { collection, addDoc, getFirestore, query, where, getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveUsuarioInDB = async (usuario: Usuario) => {
  try {
    if (usuario.inptuEmail === "") {
      alert("Debes proporcionar un correo electrónico válido");
      return;
    }
    // Verificar si existe
    const usuarioQuery = query(collection(db, "usuarios"),
     where("inptuEmail", "==", usuario.inptuEmail),
     where("inptuPassword", "==", usuario.inptuPassword));
    const querySnapshot = await getDocs(usuarioQuery);

    if (!querySnapshot.empty) {
      alert("El usuario ya existe; iniciando sesión")
      console.log("El usuario ya existe en Firestore");
      return;
    }

    await addDoc(collection(db, "usuarios"), usuario);
    alert("Usuario registrado correctamente")
    console.log("Usuario guardado exitosamente en Firestore");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const checkUsuarioInDB = async (usuario: Usuario) => {
  try {
    const usuarioQuery = query(collection(db, "usuarios"),
    where("inptuUsername", "==", usuario.inptuUsername),
    where("inptuPassword", "==", usuario.inptuPassword));
    const querySnapshot = await getDocs(usuarioQuery);

    if (!querySnapshot.empty) {
      alert("Se ha iniciado sesión correctamente");
      console.log("El usuario ya existe en Firestore");
      return true;
    }

    return false;
  } catch (e) {
    console.error("Error checking document: ", e);
    return false;
  }
};

export { saveUsuarioInDB, checkUsuarioInDB, db };