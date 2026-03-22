import { getDocs, collection, getFirestore, doc, getDoc } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export const retriveData = async (collectionName: string) => {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
};

export const retriveDataById =  async (collectionName: string, id: string) =>{
    const response = await getDoc(doc(firestore, collectionName, id));
  if (response.exists()) {
    return { id: response.id, ...response.data() };
  }
  const data = await response.data();
  return data;
}
