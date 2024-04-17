import React, { Component, useState } from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";

import { Ionicons } from '@expo/vector-icons';

import appFirebase from "../credenciales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);

// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// const auth = initializeAuth(appFirebase, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

export default function Login(props) {

    //creamos las variables de estado
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false); 
    const logueo = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert('Iniciando sesion', 'Accediendo...');
            props.navigation.navigate('Home');
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'El usuario o la contraseña son incorrectos...');
        }
    }

    return (
        <View style={styles.padre}>
            <View>
                <Image source={require('../assets/imgInvernadero2.png')} style={styles.profile} />
            </View>
            <View style={styles.tarjeta}>
                <View style={styles.cajaTexto}>
                    <Ionicons name="person" size={20} color="black" style={styles.icono} />
                    <TextInput placeholder="Correo electrónico" style={styles.input}
                        onChangeText={(text) => setEmail(text)} />
                </View>

                <View style={styles.cajaTexto}>
                    <Ionicons name="lock-closed" size={20} color="black" style={styles.icono} />
                    <TextInput placeholder="Contraseña" style={styles.input}
                        onChangeText={(text) => setPassword(text)} secureTextEntry={!showPassword} />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="black" style={styles.icono} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.boton} onPress={logueo}>
                    <Text style={styles.TextoBoton}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    padre: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    profile: {
        width: 400,
        height: 350,
        borderRadius: 50,
        borderColor: 'white'
    },
    tarjeta: {
        margin: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 20,
        width: '90%',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    cajaTexto: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#cccccc90',
        borderRadius: 30,
        marginVertical: 10,
        paddingHorizontal: 15
    },
    icono: {
        marginRight: 10
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 15, 
    },
    boton: {
        backgroundColor: '#FCB03E',
        borderRadius: 30,
        paddingVertical: 20,
        alignItems: 'center',
        marginTop: 20
    },
    TextoBoton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20, 
    }
    
});