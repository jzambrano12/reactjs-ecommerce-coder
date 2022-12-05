import { getFirestore } from "firebase/firestore";

export const firebaseDb = () => {
  return getFirestore();
};
