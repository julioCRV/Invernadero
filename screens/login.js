import React, { Component, useState } from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from "react-native";

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
            await signInWithEmailAndPassword(auth, `${email}@gmail.com`, password);
            Alert.alert('Iniciando sesión', 'Accediendo...');
            props.navigation.navigate('Home');
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'El usuario o la contraseña son incorrectos...');
        }
    }

    return (
        <ImageBackground
        source={require('../assets/fondo.png')}
        style={styles.container}
        resizeMode="cover"
    >
        <View style={styles.padre}>
            <Text style={styles.title}>Controla tu invernadero con un solo clic. Accede aquí</Text>
            <View>
                <Image source={require('../assets/img-invernadero.jpg')} style={styles.profile} />
            </View>
            <View style={styles.tarjeta}>
                <View style={styles.cajaTexto}>
                    <Ionicons name="person" size={20} color="black" style={styles.icono} />
                    <TextInput placeholder="Nombre de usuario" style={styles.input}
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
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    padre: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        marginLeft: '15%',
        marginRight: '15%',
        textShadowColor: '#fff', 
        textShadowOffset: { width: 0, height: 1 }, 
        textShadowRadius: 11,
        color: '#000000'
    },
    profile: {
        width: 350,
        height: 350,
        borderRadius: 50,
    },
    tarjeta: {
        margin: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 20,
        width: 350,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
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
        color: '#000000'
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
    },
    container: {
        flex: 1,
        padding: 40,
      },
});