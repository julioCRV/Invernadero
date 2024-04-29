import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ListaInvernaderos from './Components/InvernaderoLista';
import Login from './screens/login';
import VerConfiguraciones from './screens/ConfiguracionInventario'
import { Ionicons } from '@expo/vector-icons';


export default function App() {

  const Stack = createStackNavigator();
  

  function MyStack() {
    return (
  
      <Stack.Navigator>
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
          })}/>
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
