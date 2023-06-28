import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
    ImageBackground, 
    Alert,
    TextInput
  } from 'react-native';
  import React, { useState } from 'react';
  import { AntDesign } from '@expo/vector-icons'; 

  import * as Animatable from 'react-native-animatable';
  import { useNavigation } from '@react-navigation/native';
  import axios from 'axios';


  import { Conexaoback } from "../../services/conexaoback"


  export default function TelaCadastro() {

  const navigation = useNavigation();


  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    try {
      const conexao = new Conexaoback();
      const response = await conexao.registerUsers({
        nome,
        telefone,
        email,
        senha,
      });
  
      if (response.data.success) {
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso.');
      } else {
        Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o usuário.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar o usuário:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o usuário.');
    }
  };  

    return (
    <View style={styles.container}>
        <ImageBackground  
        source={require('../../assets/backgroundConfig.png')} 
        style={styles.imageBackground}
        >

        <View style={styles.dadosCadastro}>
            <View style={styles.logo}>
            <Animatable.Image
            animation="flipInX"
            source={require('../../assets/logo.png')}
            resizeMode="contain" style={styles.img}
            />

            <Text style={styles.tituloPag}>Dados de Cadastro</Text>
            </View>

        
          <View style={styles.containerPrincipal}>
            
          <View>
            <Text style={styles.text}>
            Digite seu nome e sobrenome
            </Text>
            <TextInput name="Nome e sobrenome" 
            value={nome}
            onChangeText={setNome}
            style={styles.input} placeholder="Nome e sobrenome"/>
            <ErrorMessage
              component="span"
              name="nome"
            />
          </View>

          <View>
            <Text style={styles.text}>
            Informe seu e-mail
            </Text>
            <TextInput name="email" 
            value={email}
            onChangeText={setEmail}
            style={styles.input} placeholder="Email"/>
            <ErrorMessage
              component="span"
              name="email"
            />
          </View>

          <View>
            <Text style={styles.text}>
            Informe seu telefone
            </Text>
            <TextInput name="telefone" 
            value={telefone}
            onChangeText={setTelefone}
            style={styles.input} placeholder="Telefone"/>
            <ErrorMessage
              component="span"
              name="telefone"
            />
          </View>

            <Text style={styles.text}>
            Crie uma senha
            </Text>

            <View style={styles.inputSenha}>
            <TextInput name="password" 
            value={senha}
            onChangeText={setSenha}
            style={styles.senha} secureTextEntry={ocultarSenha} placeholder="Senha"/>
            <TouchableOpacity style={styles.icone} onPress={ () => setOcultarsenha(!ocultarSenha)}>
              {ocultarSenha ? 
                <AntDesign name="eye" size={25} color="black" />
                :
                <AntDesign name="eyeo" size={25} color="black" />
              }
            </TouchableOpacity>
            <ErrorMessage
              component="span"
              name="password"
            />    
          </View>

          <View style={styles.campoBotoes}>  
            <View style={styles.textoBotoes}>
              <Text style={styles.textFinalizar}>
              Clique em continuar para finalizar seu cadastro
              </Text>
            </View>
              <View style={styles.botoes}>
              <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('pagTelaLogin')}>
                  <Text style={styles.textBotao}>
                      Voltar
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCadastro} style={styles.botao}>
                  <Text style={styles.textBotao}>
                      Continuar
                  </Text>
              </TouchableOpacity>
              </View>
          </View>
          </View>
        </View>
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
      logo:{
        flex: 1,
        top: '18%'
      },
      img:{
        position: 'absolute',
        width: '100%',
        height: '80%',
        bottom: '75%'
      },
      text:{
        fontSize: 19,
        marginBottom: '1%',
        marginTop: '3%',
      },
      tituloPag:{
        fontSize: 35,
        fontWeight: 'bold',
        // marginBottom: '5%',
        color: '#fff',
        textAlign: 'center'
      },
      input:{
        // flex: 1,
        borderWidth: 1,
        borderColor: '#2152CF',
        borderRadius: 5,
        // backgroundColor: '#D9D9D9',
        padding: 6
      },
      inputSenha:{
        flexDirection: 'row'
      },
      senha:{
        borderWidth: 1,
        borderColor: '#2152CF',
        borderRadius: 5,
        padding: 6,
        width: '90%',
        marginRight: '3%'
      },
      dadosCadastro:{
        flex: 1,
        width: '90%',
        // height: '60%'
        // justifyContent: 'space-around',
        // backgroundColor: 'blue'
      },
      containerPrincipal:{
        flex: 2,
        width: '80%',
        alignSelf: 'center',
        marginTop: '8%'
        // height: '50%'
        // marginBottom: '30%'
      },
      campoBotoes:{
        marginTop: '5%',
      },
      textoBotoes:{
        // flex: 1,
        alignItems: 'center',
        // padding: 10,
        margin: '3%'
      },
      textFinalizar:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#38B5DF',
        textAlign: 'left'
      },
      botoes:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      botao:{
        backgroundColor: '#2152CF',
        padding: 10,
        width: '45%',
        alignItems: 'center', 
        borderRadius: 10
      },
      textBotao:{
        color: '#fff',
        fontWeight: 'bold'
      },
      icone:{
        justifyContent: 'center'
      },
  })