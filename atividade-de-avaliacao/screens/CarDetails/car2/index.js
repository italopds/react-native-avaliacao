import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function CarDetails2({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://s3-sa-east-1.amazonaws.com/revresources/sevenn-multimarcas/imagens_veiculos/640_480_folhacar_volkswagen-golf-1-4-tsi-bluemotion-tech-dsg-highline-14-15-f81c77-1.jpg',
        }}
        style={styles.carImage}
      />
      <Text style={styles.carName}>
        VOLKSWAGEN GOLF 2.0 350 TSI GASOLINA GTI DSG
      </Text>
      <Text style={styles.carDescription}>
        V Cidade Itapetininga - SP Ano 2018/2019 KM 60.667 Câmbio Automática
        Carroceria Hatchback Combustível Gasolina Final de placa 9 Cor Branco
        Aceita troca Sim
      </Text>
      <Button
        title="voltar "
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
