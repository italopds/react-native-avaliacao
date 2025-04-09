import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function CarDetails1({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://ateliedocarro.com.br/wp-content/uploads/2019/03/Voyage-GL-88-Bege-Flash-1.jpg',
        }}
        style={styles.carImage}
      />
      <Text style={styles.carName}>
        Volkswagen - Voyage - GL 1.8 - 1992/1992{' '}
      </Text>
      <Text style={styles.carDescription}>
        PLACA PRETA - CAUTELAR APROVADO MANUAL E CHAVE CÓPIA LICENCIADO 2025 -
        RODAS DE LIGA DO SANTANA TENHO AS ORIGINAIS, VAI JUNTO. VOLANTE 4 BOLAS
        FAROL DE MILHA VÍDEO NO INSTAGRAM JFCARVEICULOS APROVEITA E JÁ SEGUE
      </Text>
      <Button
        title="Voltar "
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
    padding: 10,
    backgroundColor: 'lightblue',
  },
  carImage: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  carName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carDescription: {
    fontSize: 16,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
