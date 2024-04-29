import React, { useState, useEffect } from 'react';
import { ScrollView, ImageBackground, StyleSheet } from 'react-native';
import appFirebase from '../credenciales';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, setDoc, getDoc } from 'firebase/firestore';
import Card from './InvernaderoCard';

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
    <ImageBackground
    source={require('../assets/fondo.png')}
    style={styles.container}
    resizeMode="cover"
>
    <ScrollView>
      {lista.map(greenhouse => (
        <Card
          key={greenhouse.id}
          name={greenhouse.nombre}
          imageUrl={greenhouse.imagenURL}
        />
      ))}
    </ScrollView>
    </ImageBackground>

  );
};

export default GreenhouseList;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 10,
  },
});