import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import GreenhouseCard from './GreenhouseCard';

const GreenhouseList = () => {
  // Supongamos que tienes un array de invernaderos con sus nombres e imágenes
  const greenhouses = [
    { id: 1, name: 'Invernadero A', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OB5onf5asHsukhJf2XA8y3-KvtPgbOHgpA&usqp=CAU' },
    { id: 2, name: 'Invernadero B', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OB5onf5asHsukhJf2XA8y3-KvtPgbOHgpA&usqp=CAU' },
    { id: 3, name: 'Invernadero C', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OB5onf5asHsukhJf2XA8y3-KvtPgbOHgpA&usqp=CAU' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={greenhouses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <GreenhouseCard name={item.name} imageUrl={item.imageUrl} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
  },
});

export default GreenhouseList;
