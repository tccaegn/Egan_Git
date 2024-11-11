import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Menu({ onClose }) {
  const navigation = useNavigation();

  const handleAjudaPress = () => {
    navigation.navigate('Ajuda');
  };

  const handleInforPress = () => {
    navigation.navigate('MaterialAul'); // Verifique se o nome da rota está correto
  };

  const handlePoliticaPress = () => {
    navigation.navigate('Chat'); // Verifique se o nome da rota está correto
  };

  const handleSairPress = () => {
    navigation.navigate('Splash');
    onClose();
  };
  
  return (
    <TouchableWithoutFeedback onPress={onClose}>
      <View style={Styles.container}>
        <TouchableWithoutFeedback>
          <View style={Styles.content}>
            <Text style={Styles.titulo}>Menu</Text>
            <TouchableOpacity onPress={handleAjudaPress}>
              <Text style={Styles.texto}>Ajuda</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleInforPress}>
              <Text style={Styles.texto}>Informações</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePoliticaPress}>
              <Text style={Styles.texto}>Política de segurança</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 25, flexDirection: 'row'}} onPress={handleSairPress}>
              <Image source={require('../assets/sair.png')} style={Styles.sair}/>
              <Text style={Styles.textoSair}>Sair</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparência de fundo para o modal
    marginTop: 40,
  },
  content: {
    backgroundColor: '#580113',
    width: "52%",
    paddingTop: 10,
    paddingBottom: 30,
    alignContent: 'center',
    borderRadius: 2,
    position: 'absolute',
    top: 8, // Ajuste a posição do topo conforme necessário
    left: 10, // Ajuste a posição da esquerda conforme necessário
    padding: 10, // Adiciona um pouco de padding
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },
  texto: {
    fontSize: 18,
    color: 'white',
    marginBottom: 0,
    padding: 2,
  },
  textoSair: {
    fontSize: 22,
    color: 'white',
    marginBottom: 0,
    padding: 2,
    fontWeight: 'bold',
  },
   sair: {
    width: 35,
    height: 35,
    marginRight: 5,
   
  },
});