import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ListaInvernaderos from './Components/InvernaderoLista';
import Login from './screens/login';
import VerConfiguraciones from './screens/ConfiguracionInventario'
import { Ionicons } from '@expo/vector-icons';
const Stack = createStackNavigator();

const SplashScreen = ({navigation}) => {
  // Simula un tiempo de espera antes de navegar a la página principal
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navegar a la página principal
      navigation.replace('Login');
    }, 3000); // Cambia el tiempo de espera según tus necesidades

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ImageBackground
      source={require('./assets/scesi-logo-blanco.png')} // Cambia la ruta a tu imagen de fondo
      style={styles.container}
      resizeMode="cover"
    >
      {/* Puedes agregar contenido adicional en la pantalla de inicio si es necesario */}
    </ImageBackground>
  );
};

export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (

      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />

        <Stack.Screen name='Login' component={Login}
          options={{
            title: "¡Bienvenido a AgroScesi!",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#FCB03E" },
          }} />
        <Stack.Screen name='Home' component={HomeScreen}
          options={{
            title: "INVERNADEROS",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#FCB03E" },
          }} />
        <Stack.Screen name="VerConfig" component={VerConfiguraciones}
          options={({ navigation }) => ({
            title: "CONFIGURACIONES",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#FCB03E" },
            headerRight: () => (
              <Ionicons
                name="log-out"
                size={24}
                color="white"
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate('Login')}
              />
            ),
          })} />
      </Stack.Navigator>

    )
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <ListaInvernaderos navigation={navigation} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
