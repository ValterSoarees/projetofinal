import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 


const TelaInicial = () => {

  const [livrosFavoritos, setLivrosFavoritos] = useState([]);
  const [livros, setLivros] = useState([]);
  const navigation = useNavigation();

  const addLivrosFavoritos = (livro) => {
    const newFavoritos = [...livrosFavoritos];
    newFavoritos.push(livro);
    setLivrosFavoritos(newFavoritos, Alert.alert('Livro favoritado com sucesso!'));
  };

  useEffect(() => {
    const load = async () => {
      const resultJson = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=love&key=AIzaSyA2gnDV1nrAOHTaPOOCb181fexdxSXTc-c'
        
      );
      const resultProduct = await resultJson.json();
      let resultFormatado = resultProduct.items.map(({ id, volumeInfo }) => ({
        id: id,
        nome: volumeInfo.title,
        autor: volumeInfo.authors,
        descricao: volumeInfo.description,
        imagem: volumeInfo.imageLinks?.thumbnail,
        categoria: volumeInfo.categories,
        paginas: volumeInfo.pageCount,
      }));

      setLivros(resultFormatado);
    };

    load();
  }, []);

  return (
    <>
        <ImageBackground  
        source={require('../../assets/backgroundClaro.png')} 
        style={styles.imageBackground}
        >
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {livros.map((livro) => (
              <TouchableOpacity
                key={livro.id}
                onPress={() =>
                  navigation.navigate('pagLivroDetalhes', { livro })
                }
                style={styles.livroContainer}
              >
                <View style={styles.cardImagem}>
                  {livro.imagem && (
                    <Image
                      source={{ uri: livro.imagem }}
                      style={styles.imagemLivro}
                    />
                  )}
                </View>
                <View style={styles.infos}>
                  <Text style={styles.textInfo} numberOfLines={1}>{livro.nome}</Text>
                </View>
                  {/* </TouchableOpacity><TouchableOpacity style={styles.btFavoritar} onPress={() => addLivrosFavoritos(livro)}> */}
                  <TouchableOpacity style={styles.btFavoritar} onPress={() => navigation.navigate('pagLivrosFav',{livros: livrosFavoritos, addLivrosFavoritos, livrosFavoritos})}>
                    <View>
                      <Text>FAVORITAR</Text>
                    </View>
                    <View style={{marginLeft: 5}}>
                      <Feather name="heart" size={20} color="black" />
                    </View>
                  </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 30
  },
  livroContainer: {
    width: '37%',
    marginBottom: 40,
  },
  cardImagem: {
    // backgroundColor: '#38B5DF',
    // padding: 10,
    // borderRadius: 10,
    // alignItems: 'center'
  },
  infos: {
    alignItems: 'center',
    // backgroundColor: '#38B5DF',
    padding: 7,
    borderRadius: 10,
    marginTop: 5,
  },
  textInfo: {
    color: '#0F121A',
    fontWeight: 'bold',
    width: '80%',
    textAlign: 'center'
  },
  imagemLivro: {
    width: 150,
    height: 232,
  },
  imageBackground: {
    flex: 1,
  },
  btFavoritar:{
    backgroundColor: '#38B5DF',
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 7,
  }
});

export default TelaInicial;