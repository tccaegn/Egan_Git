import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Image, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import * as Font from 'expo-font';

const Identificacao = ({navigation}) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFont = async () => {
    await Font.loadAsync({
      'bukhariscript': require('../fontes/BukhariScript.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFont();
  }, []);


  // Função para navegar para Cad_aluno
  const handleAlunoPress = () => {
    navigation.navigate('Cad_aluno'); // Navega para a tela Cad_aluno
  };
   const handleCoordenacaoPress = () => {
    navigation.navigate('Cad_coordenacao'); // Navega para a tela Cad_aluno
  };
  const handleLoginPress = () => {
    navigation.navigate('Login'); // Navega para a tela Cad_aluno
  };

  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ECEDFA' }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/logo_3.png')} />
          <View>
            <Text style={styles.titulo}> Bem-vindo de volta </Text>
          </View>
          <View>
            <TouchableOpacity style={styles.buttonCad} onPress={handleAlunoPress}>
              <Text style={styles.buttonText}>ALUNO</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.buttonCad} onPress={handleCoordenacaoPress}>
              <Text style={styles.buttonText}>COORDENAÇÃO</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonInner} onPress={handleLoginPress}>
              <Text style={styles.buttonText}>Já tem uma conta?</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text3}>Egan School®</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Identificacao;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 1,
  },
  logo: {
    height: 105,
    width: 250,
    marginBottom: 20,
    marginTop: 50,
  },
  text1: {
    marginLeft: 170,
    textDecorationLine: 'underline',
    marginTop: -4,
    fontFamily: 'century gothic',
    alignItems: 'center',
    color: '#04084E',
  },
  text2: {
    textDecorationLine: 'underline',
    fontFamily: 'century gothic',
    alignItems: 'center',
    color: '#04084E',
    justifyContent: 'center',
    paddingTop: 10,
  },
  text3: {
    alignItems: 'center',
    color: '#04084E',
    paddingTop: 10,
    fontSize: 15,
    marginTop: 50,
  },
  titulo: {
    color: '#04084E',
    paddingTop: 10,
    fontSize: 35,
    fontFamily: 'bukhariscrip',
    marginHorizontal: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer2: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  input: {
    marginBottom: 15,
    padding: 6,
    borderWidth: 1,
    borderRadius: 20,
    width: 340,
    backgroundColor: '#262626',
    color: 'white',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: 250,
    height: 60,
    marginTop: 60,
  },
  buttonInner: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#1B7AEE',
  },
  buttonCad: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#580113',
    borderRadius: 12,
    width: 280,
    height: 60,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
