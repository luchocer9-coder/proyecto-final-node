import { db } from "../config/firebase.config.js";
import { collection, getDocs, doc, getDoc, addDoc, deleteDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getAllProductsModel = async () => {
  const snapshot = await getDocs(productsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getOneProductModel = async (id) => {
  const docRef = doc(db, "products", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return null;
  return { id: snapshot.id, ...snapshot.data() };
};

export const createOneProductModel = async (product) => {
  const docRef = await addDoc(productsCollection, product);
  return { id: docRef.id, ...product };
};

export const deleteOneProductModel = async (id) => {
  const docRef = doc(db, "products", id);
  await deleteDoc(docRef);
};