import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import appFirebase from '../credenciales';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, setDoc, getDoc } from 'firebase/firestore';
import Card from './InvernaderoCard'; // Asegúrate de que la ruta de importación sea correcta

const db = getFirestore(appFirebase);

const GreenhouseList = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getLista = async() => {
      try{
        const querySnapshot = await getDocs(collection(db, 'invernaderos'));
        const docs = [];
        querySnapshot.forEach((doc) => {
          const {nombre, imagenURL} = doc.data();
          docs.push({
            id:doc.id,
            imagenURL,
            nombre,
          })
        });
        setLista(docs);
      }catch (error) {
        console.log(error);
      }
    }
    getLista();
    console.log("exito.......")
  }, []);

  return (
    <ScrollView>
      {lista.map(greenhouse => (
        <Card
          key={greenhouse.id}
          name={greenhouse.nombre}
          imageUrl={greenhouse.imagenURL}
        />
      ))}
    </ScrollView>
  );
};

export default GreenhouseList;
