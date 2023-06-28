import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground, 
  TextInput
} from 'react-native';
import React from 'react';

export default function LivrosFavoritos() {

  return (
  <View style={styles.container}>
      <ImageBackground  
      source={require('../../../assets/backgroundClaro.png')} 
      style={styles.imageBackground}
      >
      </ImageBackground>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      flexDirection: 'column',
    },
  imageBackground: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
})