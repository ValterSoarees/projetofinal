import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Button } from "react-native";

const urlDev = "http://localhost:3003"
const urlProduct = "https://api-backend-bd-tarde.onrender.com"

export default function DetalhesLivro() {
  const route = useRoute();
  const { livro } = route.params;

  const [livroDetalhes, setLivroDetalhes] = useState(null);

  const [comentario, setComentario] = useState('')
  const [nome, setNome] = useState('')

  const load = async () => {
    const result = await fetch("http://localhost:3003/cadastrocomentario",
      {
        method: "POST",
        headers: {
          nome: nome,
          comentario: comentario
        },
      }

    ).then(res => res)

    const resultadoComentario = await result.json()

    console.log('resultadoComentario', resultadoComentario)

  }

  useEffect(() => {
    const load = async () => {
      if (livro) {
        const resultado = await fetch(`https://www.googleapis.com/books/v1/volumes/${livro.id}`);
        const livroDetalhes = await resultado.json();

        setLivroDetalhes({
          id: livroDetalhes.id,
          nome: livroDetalhes.volumeInfo.title,
          imagem: livroDetalhes.volumeInfo.imageLinks?.thumbnail,
          autor: livroDetalhes.volumeInfo.authors,
          descricao: livroDetalhes.volumeInfo.description,
          categoria: livroDetalhes.volumeInfo.categories,
          paginas: livroDetalhes.volumeInfo.pageCount,
        });
      }
    };

    load();
  }, [livro]);

  return (
    <>
    <ImageBackground  
        source={require('../../../assets/backgroundDetalhes.png')} 
        style={styles.imageBackground}
        >
    <View style={styles.container}>
      <ScrollView>
        {livroDetalhes && (
          <View key={livroDetalhes.id} style={styles.detalhesContainer}>
            <View>
              {livroDetalhes.imagem ? (
                <View style={styles.containerImagem}>
                <Image source={{ uri: livroDetalhes.imagem }} style={styles.imagem} />
                </View>
              ) : (
                <View style={styles.placeholderContainer}>
                  <Text style={styles.placeholderText}>Imagem indisponível</Text>
                </View>
              )}
            </View>

            <View style={styles.cardInformacoes}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>{livroDetalhes.nome}</Text>
              <Text><Text style={styles.negrito}>Autor(a)</Text>: {livroDetalhes.autor}</Text>
              <Text><Text style={styles.negrito}>Quantidade de páginas:</Text> {livroDetalhes.paginas}</Text>

              <TouchableOpacity style={styles.btFavoritar}>
                <View>
                  <Text style={styles.textBtFavoritar}>Adicionar aos favoritos</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.textDescricao}>
              <Text><Text style={styles.negrito}>Descrição: </Text>{livroDetalhes.descricao}</Text>
              </View>
              {/* <Text>Categoria: {livroDetalhes.categoria}</Text> */}
            </View>
            <View style={{alignSelf: 'flex-start', marginLeft: '5%', marginTop: '5%'}}>
              <Text style={styles.negrito}>Comentários: </Text>
            </View>
            <View>
              <Text>Nome: </Text><TextInput placeholder="Nome" onChangeText={(text) => setNome(text)}/>
            </View>
            <View>
              <Text>Comentário: </Text> 
              <TextInput multiline={true} numberOfLines={10000} onChangeText={(text) => setComentario(text)} />
            </View>
            <TouchableOpacity style={styles.buttonEntrar} onPress={() => load()}>
            <Text style={styles.entrar}>
            Comentar
            </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
    </ImageBackground>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detalhesContainer: {
    alignItems: 'center'
  },
  containerImagem:{
    marginTop: '20%',
    marginBottom: '5%'
  },
  imagem: {
    width: 200,
    height: 300,
  },
  imageBackground: {
    flex: 1,
  },
  negrito:{
    fontWeight: 'bold'
  },
  btFavoritar:{
    backgroundColor: '#2152CF',
    padding: 10,
    borderRadius: 20,
    marginTop: '3%',
    marginBottom: '4%',
    fontWeight: 'bold',
  },
  textBtFavoritar: {
    color: '#fff'
  },
  cardInformacoes:{
    alignItems: 'center'
  },
  textDescricao: {
    marginLeft: '5%',
    marginRight: '5%'
  }
  // placeholderContainer: {
  // },
  // placeholderText: {
  // },
});
