import {Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TouchableHighlight} from 'react-native';
import { useFonts } from 'expo-font';
import { WebView } from 'react-native-webview';
import { useState } from 'react';

export default function MaterialAul({navigation}) {
  const [videoAtual, setVideoAtual] = useState('');
  const [visualizar, setVisualizar] = useState(false);
  const trocaVideo = (qual) => {setVisualizar(true); setVideoAtual(qual)};

  const [fontsLoaded] = useFonts({
    OpenSansBold: require('../fontes/OpenSans-Bold.ttf'),
    Shrikhand: require('../fontes/Shrikhand-Regular.otf'),
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

  // Verifica se houve erro no carregamento das fontes
  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>; // Mensagem de carregamento
  }

  return (
    <View style={styles.container}>
      {visualizar ? (
        <View style={styles.secundario}>
          <View style={{ width: 350, paddingTop: 220, flex: 1}}>
          <TouchableHighlight
              onPress={() => setVisualizar(false)}
              underlayColor="white">
              <Image style={{height: 40, width: 40, marginBottom: 15}}
                source={require('../assets/voltar.png')
                }/>
            </TouchableHighlight>
            <WebView style={styles.container} source={{ uri: videoAtual }} />
          </View>
        </View>
      ) : (
        <View>
          <Image style={styles.logo} source={require('../assets/logo_3.png')}/>
          <View style = {styles.ladoalado}>
            <TouchableOpacity style={styles.circulo} onPress={handleHomePress}>
              <Image style={styles.seta} source={require('../assets/setaberta.png')}/>
            </TouchableOpacity>
            <Text style={styles.ttt}> Materiais de estudo </Text>
          </View>
          
          <ScrollView style={styles.scrollView}>
            <TouchableOpacity
              style={styles.botao1} onPress={() => trocaVideo('https://www.youtube.com/watch?v=jkdYkE1xgqQ')}>
              <Image style={styles.img} source={require('../assets/1.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao1}>
              <Image style={styles.img} source={require('../assets/2.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao1}>
              <Image style={styles.img} source={require('../assets/3.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao1}>
              <Image style={styles.img} source={require('../assets/4.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao1}>
              <Image style={styles.img} source={require('../assets/5.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao1}>
              <Image style={styles.img} source={require('../assets/6.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao1}>
              <Image style={styles.img} source={require('../assets/7.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao1}>
              <Image style={styles.img} source={require('../assets/8.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao1}>
              <Image style={styles.img} source={require('../assets/9.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao1}>
              <Image style={styles.img} source={require('../assets/10.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao1}>
              <Image style={styles.img} source={require('../assets/11.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao1}>
              <Image style={styles.img} source={require('../assets/12.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao1}>
              <Image style={styles.img} source={require('../assets/13.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao1}>
              <Image style={styles.img} source={require('../assets/14.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao1}>
              <Image style={styles.img} source={require('../assets/vazio.png')}/>
            </TouchableOpacity>
          </ScrollView>

          <View style={{borderBottomWidth: 3, borderBottomColor: '#1f1f1f', linhawidth: '100%'}}/>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleHomePress}>
          <Text style={styles.letraEfooter}>e</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleMaterialPress}>
          <Image style={styles.imagemFooterlivro} source={require('../assets/Livro.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleChatPress}>
          <Image style={styles.imagemFooterchat} source={require('../assets/Chat.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleVestibularesPress}>
          <Text style={styles.letraVfooter}>V</Text>
        </TouchableOpacity>
      </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  botao1: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 15,
    height: 100,
    width: 330,
    marginTop: 15,
    backgroundColor: '#580112',
    borderRadius: 15,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECEDFE',
    marginTop: -150,
  },
  ttt: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'OpenSansBold',
    marginRight: -50,
    top: -42,
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 390,
  },
  logo: {
    marginTop: 200,
    marginLeft: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 95,
    width: 210,
  },
  scrollView: {
    backgroundColor: '#ECEDFE',
    marginHorizontal: 20,
    marginTop: -37,
  },
  circulo: {
    backgroundColor: '#580113',
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top: 4,
    marginLeft: -50,
    display: 'flex',
    marginTop: -90
  },
  seta: {
    width: 30,
    height: 30,
  },

  ladoalado: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 50
  },
  secundario: {
    backgroundColor: '#ECEDFE',
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ECEDFE',
    marginBottom: -55,
    alignItems: 'center',
    width: '105%',
  },

  letraEfooter: {
    fontFamily: 'shrikhand',
    fontSize: 65,
    color: '#04084E',
    marginBottom: 65
  },

  letraVfooter: {
    fontFamily: 'OpenSansBold',
    fontSize: 50,
    color: '#04084E',
    marginBottom: 70,
    paddingRight: 22
  },

  imagemFooterlivro: {
    height: 45,
    width: 60,
    marginLeft: 0,
    marginBottom: 65,
  },

  imagemFooterchat: {
    height: 50,
    width: 50,
    marginBottom: 70,
    marginLeft: 0,
  },
});