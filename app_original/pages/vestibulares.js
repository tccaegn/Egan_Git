import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useFonts } from 'expo-font';

export default function Vestibulares({navigation}) {
  const [fontsLoaded] = useFonts({
    OpenSansBold: require('../fontes/OpenSans-Bold.ttf'),
    shrikhand: require('../fontes/Shrikhand-Regular.otf'),
    OpenSans: require('../fontes/OpenSans-Regular.ttf'),
    OpenSauce: require('../fontes/OpenSauce.ttf'),
    BukhariScrpit: require('../fontes/BukhariScript.ttf'),
  });

  const handleHomePress = () => {
    navigation.navigate('Home'); 
  };
  const handleMaterialPress = () => {
    navigation.navigate('MaterialAul'); 
  };
  const handleChatPress = () => {
    navigation.navigate('Chat');
  };
  const handleVestibularesPress = () => {
    navigation.navigate('Vestibulares'); 
  };
  const handleVestibulares2Press = () => {
    navigation.navigate('Vestibulares2'); 
  };

  if (!fontsLoaded) {
    return <Text>Carregando Fontes...</Text>; // ou uma mensagem de carregamento
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo_3.png')} />
        <View style={styles.ladoalado}>
          <TouchableOpacity style={styles.circulo} onPress={handleHomePress}>
            <Image
              style={styles.seta}
              source={require('../assets/setaberta.png')}
            />
          </TouchableOpacity>
          <Text style={styles.vestibulareexame}>Vestibulares e Exames</Text>
        </View>

        <TouchableOpacity style={styles.botao} onPress={handleVestibulares2Press}>
          <Text style={styles.textobotao}>ENEM 2024</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textobotao}>FUVEST</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textobotao}>COMVEST</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textobotao}>FATEC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoinsti}>
          <Text style={styles.textobotaoinsti}>Instituições Parceiras</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaocursinhos}>
          <Text style={styles.textobotao}>Cursinhos</Text>
        </TouchableOpacity>

        <View style={styles.linha} />
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleHomePress}>
            <Text style={styles.letraEfooter}>e</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleMaterialPress}>
            <Image style={styles.imagemFooterlivro} source={require('../assets/Livro.png')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleChatPress}>
            <Image style={styles.imagemFooterchat} source={require('../assets/Chat.png')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleVestibularesPress}>
            <Text style={styles.letraVfooter}>V</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECEDFE',
    marginTop: '-15%'
  },

  botao: {
    width: '70%',
    backgroundColor: '#580113',
    height: '7%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '6%',
  },

  botaoinsti: {
    width: '70%',
    backgroundColor: '#04084E',
    height: '7%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '6%',
  },

  botaocursinhos: {
    width: '70%',
    backgroundColor: '#1B7AEE',
    height: '7%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '6%',
    marginBottom: '-4%'
  },

  textobotao: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'OpenSansBold',
  },

  textobotaoinsti: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'OpenSansBold',
  },

  vestibulareexame: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'OpenSansBold',
    marginTop: '15%',
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ladoalado: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  seta: {
    width: 30,
    height: 30,
  },

  circulo: {
    backgroundColor: '#580113',
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15%',
    display: 'flex',
  },

// footer a partir daqui
  linha: {
    width: '100%',
    height: 3,
    backgroundColor: '#1F1F1F',
    marginTop: 35,
    padding: -50
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ECEDFE',
    marginBottom: 100,
    alignItems: 'center',
    width: '105%',
  },

  letraEfooter: {
    fontFamily: 'shrikhand',
    fontSize: 65,
    color: '#04084E',
    marginLeft: 18,
  },

  letraVfooter: {
    fontFamily: 'OpenSansBold',
    fontSize: 50,
    color: '#04084E',
    marginRight: 18,
  },

  imagemFooterlivro: {
    height: 45,
    width: 60,
    marginLeft: 10,
    marginBottom: -1,
  },

  imagemFooterchat: {
    height: 50,
    width: 50,
    marginBottom: 0,
    
  },
// fim do footer

    logo: {
    marginTop: 100,
    marginLeft: 15,
    justifyContent: 'center',
    borderRadius: 10,
    height: 100,
    width: 220,
    marginBottom: '-12%',
  },
});
