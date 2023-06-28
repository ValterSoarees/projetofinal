import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ImageBackground,
  TouchableOpacity, 
  TextInput
 } from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
// import mysql from 'mysql';

export default function TelaLogin() {

  const navigation = useNavigation();
  const [ocultarSenha] = useState(true);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
  <View style={styles.container}>

      

  <ImageBackground  
    source={require('../../assets/backgroundEscuro.png')} 
    style={styles.imageBackground}
  ></ImageBackground>

    <Animatable.View style={styles.formLogin} animation="fadeInUp">

    <View style={styles.realizarLogin}>
      <Text style={styles.titulo}>
        Faça seu login
      </Text>
      <TextInput
      placeholder='Digite seu login' style={styles.input}
      />
      <TextInput
      placeholder='Digite sua senha' style={styles.input} secureTextEntry={ocultarSenha}
      />
      <TouchableOpacity styles={styles.senha} onPress={() => navigation.navigate('drawerRota', {screen: 'Trocar Senha'})}>
      <Text style={styles.buttonEsqueciSenha}>
        Esqueci minha senha
      </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonEntrar} onPress={() => navigation.navigate('drawerRota')}>
      <Text style={styles.entrar}>
        Entrar
      </Text>
      </TouchableOpacity>
    </View>

    <View style={styles.FormCadastro}>
      <Text style={styles.text}>Não possui conta?</Text>
    {/* <TouchableOpacity style={styles.btCadastro} onPress={() => navigation.navigate('pagTelaCadastro')}>
      <Text style={styles.textCadastro}>
        CADASTRE-SE
      </Text>
    </TouchableOpacity> */}
    </View>

  </Animatable.View>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column"
  }, 
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  formLogin:{
    backgroundColor: '#fff',
    position: 'absolute',
    alignSelf: 'center',
    top: '15%',
    borderRadius: 10,
    width: '70%',
    height: '70%',
  },
  realizarLogin:{
    flex: 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%'
  },
  titulo: {
    color: '#2152CF',
    fontSize: 20,
    fontWeight: 'bold'
  },
  input:{
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#838B94',
    width: '70%',
    padding: 15
  },
  senha:{
    
  },
  buttonEsqueciSenha:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2152CF',
    padding: 10
  },
  buttonEntrar:{
    backgroundColor: '#2152CF',
    padding: 8,
    borderRadius: 10, 
    alignItems: 'center',
    width: '70%'
  },
  entrar:{
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  FormCadastro:{
    flex: 1,
    width: '100%',
    backgroundColor: '#2152CF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btCadastro:{
    borderWidth: 1,
    borderColor: '#fff',
    width: '60%',
    padding: 10,
    borderRadius: 10,
    marginTop: '8%',
    alignItems: 'center'
  },
  text:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  textCadastro:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})