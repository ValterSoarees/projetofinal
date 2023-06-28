import React from 'react';
import { StatusBar } from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/rotas/index.js';

export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#000" barStyle="light-content"/>
      <Rotas/> 
    </NavigationContainer>
  )
}