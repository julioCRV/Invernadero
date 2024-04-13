import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GreenhouseCard = ({ name, imageUrl }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Aquí puedes navegar a la página deseada al hacer clic en la tarjeta
    // Por ejemplo, puedes navegar a la página de detalles del invernadero
    navigation.navigate('Ver', { name, imageUrl });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 3,
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    margin: 16,
  }
});

export default GreenhouseCard;
