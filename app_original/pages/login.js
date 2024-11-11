import React, { useState, useEffect } from 'react';
import { 
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Image,
} from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const LoginAluno = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = () => {
    if (email === '' || senha === '') {
      Alert.alert('Alerta', 'Nenhum campo pode estar vazio!');
      return;
    }
    cadastrar();
  };

  const processarMensagem = (mensagem) => {
    if (mensagem === 'Email encontrado') {
      Alert.alert('Sucesso', 'Login realizado com sucesso!', [
        { text: 'OK', onPress: () => navigation.navigate('Home') },
      ]);
    } else {
      Alert.alert('Alerta',  mensagem);
    }
  };

  const cadastrar = async () => {
    setLoading(true);
    const url = 'https://tccetecsjc.com.br/tccaegn/login2.php';

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ email, senha }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const responseJson = await response.json();
        console.log("Resposta do servidor:", responseJson);

        const mensagem = responseJson.informacoes?.[0]?.msg;
        processarMensagem(mensagem);  // Chama a função para processar a mensagem
      } else {
        Alert.alert('Erro', `Erro na resposta do servidor: ${response.status}`);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      Alert.alert('Erro', 'Erro ao enviar os dados. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'OpenSans': require('../fontes/OpenSans-Bold.ttf'),
        'Shrikhand': require('../fontes/Shrikhand-Regular.otf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  const handleCadPress = () => {
    navigation.navigate('Identificacao');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ECEDFA' }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/logo_3.png')} />
          <View style={styles.inputContainer}>
            <TextInput
              value={email}
              style={styles.input}
              onChangeText={setEmail}
              placeholder={' Email'}
              placeholderTextColor={'white'}
            />
          </View>
          <View style={styles.entradaDeTexto}>
            <View style={styles.containerSenha}>
              <TextInput
                value={senha}
                style={styles.inputSenha}
                onChangeText={setSenha}
                placeholder={' Senha'}
                placeholderTextColor={'white'}
                secureTextEntry={hidePass}
              />
              <TouchableOpacity
                style={styles.senhaButton}
                onPress={() => setHidePass(!hidePass)}
              >
                <Ionicons name={hidePass ? 'eye-off' : 'eye'} color='white' size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.text1}>Esqueceu a senha?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonInner} onPress={handleFormSubmit} disabled={loading}>
              <Text style={styles.buttonText}>{loading ? 'Carregando...' : 'Entrar'}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={handleCadPress}>
              <Text style={styles.text2}> Não tem uma conta? </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text3}>Egan School®</Text>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 50,
  },
  logo: {
    height: 125,
    width: 250,
    marginBottom: 20,
    marginTop: 15,
  },
  text1: {
    textDecorationLine: 'underline',
    fontFamily: 'OpenSans',
    color: '#04084E',
    marginTop: 10,
    alignSelf: 'flex-end',
    marginRight: 1,
  },
  text2: {
    textDecorationLine: 'underline',
    fontFamily: 'OpenSans',
    color: '#04084E',
    paddingTop: 10,
  },
  text3: {
    color: '#04084E',
    paddingTop: 10,
    fontSize: 15,
    marginTop: 100,
  },
  inputContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  entradaDeTexto: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 9,
    padding: 4,
    borderWidth: 1,
    borderRadius: 20,
    width: '130%',
    backgroundColor: '#04084E',
    color: 'white',
    fontFamily: 'OpenSans',
    height: 42,
  },
  containerSenha: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    width: '130%',
    backgroundColor: '#1F1F1F',
  },
  inputSenha: {
    flex: 1,
    color: 'white',
    fontFamily: 'OpenSans',
  },
  senhaButton: {
    padding: 8,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    width: 290,
    height: 45,
    marginTop: 80,
    backgroundColor: '#1B7AEE',
  },
  buttonInner: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default LoginAluno;