import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert, Image, ActivityIndicator} from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import styles from '../pages/styles_cad.js';

const Cad_coordenacao = ({navigation}) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [matricula, setMatricula] = useState('');
  const [instituicao, setInstituicao] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [curso, setCurso] = useState('');
  const [rm, setRm] = useState('');
  const [senha, setSenha] = useState('');
  const [showSenha, setShowSenha] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [timeOut, setTimeOut] = useState(10000);
  const [loading, setLoading] = useState(false);
  const [acess, setAcess] = useState(false);
  const [msg, setMsg] = useState('');


  

//Importação das fontes
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'OpenSans': require('../fontes/OpenSans-Bold.ttf'),
        'shrikhand': require('../fontes/Shrikhand-Regular.otf'),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);



//função para analizar se nenhum campo esta vazio
  const handleFormSubmit = () => {
    if (nome === '' || email === '' || telefone === '' || rm === '' || instituicao === '' || matricula === '' || curso === '' || rg === '' || cpf === '' || senha === '') {
      Alert.alert('Alerta', 'Nenhum campo pode estar vazio!');
      return;
    }
    cadastrar();
  };


//conexão com o banco de dados
  const cadastrar = async () => {
    console.log("Enviando dados para cadastro:", { nome, email, telefone, matricula, instituicao, rg, cpf, curso, rm, senha });

    setLoading(true);
    const url = 'https://tccetecsjc.com.br/tccaegn/bd.php';

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({     
        nome: nome,
        email: email,
        telefone: telefone,
        matricula: matricula,
        instituicao: instituicao,
        curso: '',
        rg: rg,
        cpf: cpf,
        rm: '0',
        senha: senha
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Status da resposta:', response.status);
      console.log('Cabeçalhos da resposta:', response.headers);

      if (response.ok) {
        const responseText = await response.text();
        console.log('Corpo da resposta:', responseText);

        try {
          const responseJson = JSON.parse(responseText);
          console.log("Resposta do servidor:", responseJson);
          if (responseJson && responseJson.informacoes && responseJson.informacoes[0] && responseJson.informacoes[0].msg) {
            Alert.alert('Resposta do servidor', responseJson.informacoes[0].msg);
          } else {
            Alert.alert('Erro', 'Resposta do servidor mal formatada.');
          }
        } catch (parseError) {
          console.error('Erro ao analisar JSON:', parseError);
          Alert.alert('Erro', 'Resposta do servidor mal formatada.');
        }
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



  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }



//o que será mostrado ao usuário
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ECEDFE' }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containerGlobal}>
        <TouchableOpacity style={styles.buttonImage} onPress={() => navigation.navigate('Identificacao')}>
            <Image source={require('../assets/voltar.png')} style={styles.voltar} />
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <Text style={styles.titulo}>Coordenação</Text>
            <View style={{ marginTop: 20 }}>
              <View style={styles.entradaDeTexto}>
                <TextInput
                  value={nome}
                  style={styles.input}
                  onChangeText={setNome}
                  placeholder={'Nome'}
                  placeholderTextColor={'white'}
                />
              </View>
              <View style={styles.entradaDeTexto}>
                <TextInput
                  value={email}
                  style={styles.input}
                  onChangeText={setEmail}
                  placeholder={'Email'}
                  placeholderTextColor={'white'}
                />
              </View>
              <View style={styles.entradaDeTexto}>
                <TextInput
                  value={telefone}
                  style={styles.input}
                  onChangeText={setTelefone}
                  placeholder={'Telefone'}
                  keyboardType={'phone-pad'}
                  placeholderTextColor={'white'}
                />
              </View>
              <View style={styles.entradaDeTexto}>
                <TextInput
                  value={matricula}
                  style={styles.input}
                  onChangeText={setMatricula}
                  placeholder={'N° de matrícula'}
                  keyboardType={'numeric'}
                  placeholderTextColor={'white'}
                />
              </View>
              <View style={styles.entradaDeTexto}>
                <TextInput
                  value={instituicao}
                  style={styles.input}
                  onChangeText={setInstituicao}
                  placeholder={'Instituição'}
                  placeholderTextColor={'white'}
                />
              </View>
              <View style={styles.entradaDeTexto}>
                <TextInput
                  value={rg}
                  style={styles.input}
                  onChangeText={setRg}
                  placeholder={'RG'}
                  keyboardType={'phone-pad'}
                  placeholderTextColor={'white'}
                />
              </View>
              <View style={styles.entradaDeTexto}>
                <TextInput
                  value={cpf}
                  style={styles.input}
                  onChangeText={setCpf}
                  placeholder={'CPF'}
                  keyboardType={'phone-pad'}
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
                    secureTextEntry={hidePass}
                    placeholderTextColor={'white'}
                  />
                  <TouchableOpacity
                    style={styles.senhaButton}
                    onPress={() => setHidePass(!hidePass)}
                  >
                    <Ionicons name={hidePass ? 'eye-off' : 'eye'} color='white' size={25} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonInner}
                onPress={() => cadastrar()}
              >
                <Text style={styles.buttonText}>Criar conta</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.text3}>Egan School®</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Cad_coordenacao;


