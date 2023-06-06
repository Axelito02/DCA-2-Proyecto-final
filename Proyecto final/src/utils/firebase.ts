import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { Usuario } from "../types/usuario";
import { collection, addDoc, getFirestore, getDocs, query, where } from "firebase/firestore";
import { AttrComment } from "../types/interfaces";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveUsuarioInDB = async (usuario: Usuario) => {
  try {

    // Verificar si existe
    const usuarioQuery = query(
      collection(db, "usuarios"),
      where("inptuEmail", "==", usuario.inptuEmail),
      where("inptuPassword", "==", usuario.inptuPassword)
    );
    const querySnapshot = await getDocs(usuarioQuery);

    if (!querySnapshot.empty) {
      alert("El usuario ya existe; iniciando sesión");
      console.log("El usuario ya existe en Firestore");
      return;
    }

    await addDoc(collection(db, "usuarios"), usuario);
    alert("Usuario registrado correctamente");
    console.log("Usuario guardado exitosamente en Firestore");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

//guardar post
const savePostInDB = async (post: AttrComment) => {

  try {
    if (post.comment === "") {
      return true;
    }
    await addDoc(collection(db, "post"), post);
    console.log("Document written in Firestore");
    return false;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
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

const getPostFromDB = async (): Promise<AttrComment[]> => {
  const resp: AttrComment[] = [];

  const querySnapshot = await getDocs(collection(db, "post"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    resp.push({
      ...doc.data(),
    } as AttrComment)
  });
  return resp
};



export { saveUsuarioInDB, savePostInDB, getPostFromDB, checkUsuarioInDB, db };