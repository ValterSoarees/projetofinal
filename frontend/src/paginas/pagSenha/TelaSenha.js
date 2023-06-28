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
  
  import * as Animatable from 'react-native-animatable';
  import { useNavigation } from '@react-navigation/native';

  export default function TelaLogin() {

    const navigation = useNavigation();

    return (
    <View style={styles.container}>
        <ImageBackground  
        source={require('../../assets/backgroundEscuro.png')} 
        style={styles.imageBackground}
        >

        <View style={styles.dadosCadastro}>
            
            <View style={{ }}>
            <Animatable.Image
            animation="flipInX"
            source={require('../../assets/logo.png')}
            resizeMode="contain"
            style={{ width: 250 }}
            />
            </View>

          <View style={styles.containerPrincipal}>
            <Text style={styles.tituloPag}>Está com problemas na sua senha ou quer muda-lá?</Text>

            <Text style={styles.text}>
            Informe seu e-mail
            </Text>
            <TextInput placeholder='exemplo@email.com' style={styles.input}/>

              <View style={styles.botoes}>
              <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('pagTelaLogin')}>
                  <Text style={styles.textBotao}>
                      Voltar
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botao}>
                  <Text style={styles.textBotao}>
                      Continuar
                  </Text>
              </TouchableOpacity>
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
      text:{
        fontSize: 20,
        marginBottom: '1%',
        marginTop: '3%',
        textAlign: 'center'
      },
      buttonRecuperarTel:{
        marginBottom: '50%'
      },
      text1:{
        fontSize: 16,
        marginBottom: '1%',
        marginTop: '3%',
        textAlign: 'center',
        fontWeight: 'bold'
      },
      tituloPag:{
        fontSize: 20,
        // fontWeight: 'bold',
        marginBottom: '5%',
        color: '#fff',
        textAlign: 'center',
      },
      input:{
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        backgroundColor: '#D9D9D9',
        padding: 6,
        color: '#fff',
      },
      dadosCadastro:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      containerPrincipal:{
        marginBottom: '30%',
      },
      campoBotoes:{
        alignItems: 'center',
        padding: 10,
        margin: 20
      },
      textFinalizar:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
      },
      botoes:{
        flexDirection: 'row',
        justifyContent: 'center',
      },
      botao:{
        backgroundColor: '#2152CF',
        padding: 10,
        width: '35%',
        alignItems: 'center', 
        borderRadius: 10,
        marginRight: '1%'
      },
      textBotao:{
        color: '#fff',
      }
  })