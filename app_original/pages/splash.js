import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const delay = 1000; // Delay de 1 segundo

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [exec, setExec] = useState(true);
  const [time, setTime] = useState(3);
  const navigation = useNavigation();
  const timer = useRef(null); // Usamos useRef para guardar o timer

  useEffect(() => {
    // Inicia o timer
    timer.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, delay);

    // Limpa o timer quando o componente é desmontado
    return () => clearInterval(timer.current);
  }, []);

  useEffect(() => {
    if (counter >= time && exec) { // Verifica se o counter alcançou o tempo e se a execução está habilitada
      setExec(false); // Desativa a execução para evitar navegação repetida
      navigation.navigate('Carrossel'); // Redireciona para a página "Carrossel"
    }
  }, [counter, time, exec, navigation]); // Adiciona `exec` como dependência

  return (
    <LinearGradient colors={['#ECEDFE', '#04084E']} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  },
});
