import { db } from "./firebaseConfig.js";
import { collection, doc, getDocs, getDoc, query, where } from "firebase/firestore";

const getData = async (idCategory)=>{
    let items;
    if(idCategory){
        items = query(collection(db, "products"), where("idCategory", "==", parseInt(idCategory)));
    }else{
        items = query(collection(db, "products"));
    }

    const querySnapshot = await getDocs(items);
    const dataFromFirestore = querySnapshot.docs.map(item => ({
        id : item.id,
        ...item.data()
    }))

    return dataFromFirestore
}

const getProduct = async (idItem)=>{
    const item = doc(db, "products", idItem)
    const getItem = await getDoc(item)

    if(getItem.exists()){
        return {
            id: idItem,
            ...getItem.data()
        }
    }else{
        console.log("No se encuentra el documento")
    }
}

export {getData, getProduct}