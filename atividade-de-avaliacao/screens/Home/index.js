import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao Feirão de Carros</Text>
      <Image
        source={{
          uri: 'https://mapadocarro.com/wp-content/uploads/2024/11/Design-sem-nome-2024-11-16T204240.892.png',
        }}
        style={styles.carImage}
      />
      <Button
        title="Ir para Carros"
        onPress={() => navigation.navigate('Cars')}
        color="black"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  carImage: {
    width: 200,
    height: 120,
    marginBottom: 40,
  },
});
