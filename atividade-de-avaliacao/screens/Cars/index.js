import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function Cars({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carros do Feirão</Text>

      <View style={styles.carContainer}>
        <Image
          source={{
            uri: 'https://ateliedocarro.com.br/wp-content/uploads/2019/03/Voyage-GL-88-Bege-Flash-1.jpg',
          }}
          style={styles.carImage}
        />
        <Text style={styles.carName}>
          Volkswagen - Voyage - GL 1.8 - 1992/1992{' '}
        </Text>

        <Button
          title="Ver Detalhes"
          onPress={() => navigation.navigate('Car1')}
          color="black"
        />
      </View>

      <View style={styles.carContainer}>
        <Image
          source={{
            uri: 'https://s3-sa-east-1.amazonaws.com/revresources/sevenn-multimarcas/imagens_veiculos/640_480_folhacar_volkswagen-golf-1-4-tsi-bluemotion-tech-dsg-highline-14-15-f81c77-1.jpg',
          }}
          style={styles.carImage}
        />
        <Text style={styles.carName}>
          VOLKSWAGEN GOLF 2.0 350 TSI GASOLINA GTI DSG{' '}
        </Text>
        <Text style={styles.carDescription}></Text>
        <Button
          title="Ver Detalhes "
          onPress={() => navigation.navigate('Car2')}
          color="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'lightblue',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  carContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  carImage: {
    width: 200,
    height: 120,
    marginBottom: 10,
    borderRadius: 10,
  },
  carName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
});
