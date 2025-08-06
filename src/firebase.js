import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCGvJCI_cGKbqrxaVzJOKB5v-TYjSL8EO4",
  authDomain: "platform-5d648.firebaseapp.com",
  projectId: "platform-5d648",
  storageBucket: "platform-5d648.firebasestorage.app",
  messagingSenderId: "910239752883",
  appId: "1:910239752883:web:4e3fdbf3b7688250d086c6"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default {app};
export {  db };
