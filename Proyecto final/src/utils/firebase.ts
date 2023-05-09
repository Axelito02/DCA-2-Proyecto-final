// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc, getDocs} from "firebase/firestore";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCYXmmq-T7Dy7gkhe72uQgNfo1z1-dxyuM",
//   authDomain: "playconnect-bfec3.firebaseapp.com",
//   projectId: "playconnect-bfec3",
//   storageBucket: "playconnect-bfec3.appspot.com",
//   messagingSenderId: "655255094707",
//   appId: "1:655255094707:web:953d5c5cc41e8f711b77c6"
// };

// // // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//     console.error("Error adding document: ", e);
// }

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
