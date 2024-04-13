import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import GreenhouseCard from './Components/InvernaderoLista';
import Login from './screens/login';
import Home from './screens/Home';
import VerScreen from './Components/otro'

export default function App() {

  const Stack = createStackNavigator();
  

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}
          options={{
            title: "INICIE SESIÓN PARA CONTINUAR",
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
           <Stack.Screen name="Ver" component={VerScreen} />
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
    <GreenhouseCard navigation={navigation} />
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
