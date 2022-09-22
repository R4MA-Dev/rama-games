import { db } from "../data/firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore";

const getData = async()=>{
    const querySnapshot = await getDocs(collection(db, "products"));
    const dataFromFirestore = querySnapshot.docs.map(item => ({
        id : item.id,
        ...item.data()
    }))

    return dataFromFirestore
}

const getDataFiltered = async(id)=>{
    const querySnapshot = await getDocs(collection(db, "products"));
    const dataFromFirestore = querySnapshot.docs.map(item => ({
        id : item.id,
        ...item.data()
    }))
    const dataFiltered = dataFromFirestore.filter(item => item.idCategory === parseInt(id))

    return dataFiltered
}

const getProduct = async(id)=>{
    const querySnapshot = await getDocs(collection(db, "products"));
    const dataFromFirestore = querySnapshot.docs.map(item => ({
        id : item.id,
        ...item.data()
    }))
    const dataFiltered = dataFromFirestore.find(item => item.id === id)

    return dataFiltered
}

export {getData, getDataFiltered, getProduct}