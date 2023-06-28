import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import React from 'react';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

export default function TelaBemVindos() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
        animation="flipInX"
        source={require('../../assets/logo.png')}
        style={{ width: '70%' }}
        resizeMode="contain"
        />
      </View>

      <Animatable.View 
      delay={500}
      animation="fadeInUp"
      style={styles.formInicial}>
        <Text style={styles.titulo}>
          Aplicativo para você comentar sobre seus livros favoritos, e interagir com outros usuários.
        </Text>
        <Text style={styles.subtitulo}>
          E aí! Vamos comentar?
        </Text>
        <Text style={styles.text}>
          Faça seu login para começar
        </Text>

        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('pagTelaLogin')}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
      </Animatable.View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#38B5DF',
  },
  containerLogo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formInicial:{
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: '20%', 
    marginBottom: 12,
    color: '#838B94'
  },
  subtitulo:{
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text:{
    fontSize: 25,
    color: '#838B94'
  },
  button:{
    position: 'absolute',
    backgroundColor: '#2152CF',
    paddingVertical: 8,
    width: '70%',
    alignSelf: 'center',
    bottom: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonText:{
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
})