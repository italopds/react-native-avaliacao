import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Route from './Route'; // Importando o arquivo de navegação

export default function App() {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
}
