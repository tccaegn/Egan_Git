import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function Vestibulares2 ({navigation}) {
  const [fontsLoaded] = useFonts({
    'OpenSansBold': require('../fontes/OpenSans-Bold.ttf'),
    'shrikhand': require('../fontes/Shrikhand-Regular.otf'),
    'OpenSans': require('../fontes/OpenSans-Regular.ttf'),
    'OpenSauce': require('../fontes/OpenSauce.ttf'),
    'BukhariScrpit': require('../fontes/BukhariScript.ttf')
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

  if (!fontsLoaded) {
    return <Text>Carregando Fontes...</Text>; // ou uma mensagem de carregamento
  }
  return (
    <View style={styles.container}>
      <View style={styles.ladoalado}>
        <TouchableOpacity style={styles.circulo} onPress={handleHomePress}>
          <Image style={styles.seta} source={require('../assets/setaberta.png')} />
        </TouchableOpacity>
        <Text style={styles.vestibulareexame}>Vestibulares e Exames</Text>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textobotao}>ENEM 2024</Text>
      </TouchableOpacity>

      <View style={styles.informacao}>
        <View style={styles.textoContainer}>
          <Text style={styles.texto}>Abertura das Inscrições: </Text>
        </View>
        <Text style={styles.dados}>27/05/2024</Text>
      </View>

      <View style={styles.informacao}>
        <View style={styles.textoContainer}>
          <Text style={styles.texto}>Último dia de Inscrição: </Text>
        </View>
        <Text style={styles.dados}>14/06/2024</Text>
      </View>

      <View style={styles.informacao}>
        <View style={styles.textoContainer}>
          <Text style={styles.texto}>Dias de Prova: </Text>
        </View>
        <Text style={styles.dados}>3/11 e 10/11 de 2024 </Text>
      </View>

      <View style={styles.caixa}>
        <View style={styles.textoContainer}>
          <Text style={styles.textoinfo}>Informações:</Text>
        </View>
        <View style={styles.textoContainer}>
          <Text style={styles.informacaoTexto}>
O Exame Nacional do Ensino Médio (Enem) tem o objetivo fornecer acesso à educação superior. As notas do Enem podem ser usadas para acesso ao Sisu e ao ProUni. Elas também são aceitas em instituições de educação superior portuguesas que têm acordo com o Inep. Além disso, os participantes do Enem podem pleitear financiamento estudantil em programas do governo como o Fies.
          </Text>
        </View>
      </View>

      <View style={styles.linha}/>
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
  );
}

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinha os itens no topo da tela
    backgroundColor: '#ECEDFE',
    height: '110%',
    width: '100%',
    paddingTop: 80, // Evita que o conteúdo suba demais
    marginTop: '-15%',
    flex: 0
  },

  vestibulareexame: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'OpenSansBold',
    marginTop: 50, // Um espaçamento menor aqui
    marginLeft: 10,
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
    marginTop: 50
  },

  botao: {
    width: '70%',
    backgroundColor: '#580113',
    height: '8%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20, // Adiciona espaçamento vertical para separar do restante
  },

  textobotao: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'OpenSansBold',
  },

  informacao: {
    flexDirection: 'row',
    justifyContent: 'center', // Garante que o texto e as datas fiquem alinhados
    width: '90%',
    marginTop: 20, // Ajusta o espaçamento entre as seções
  },

  texto: {
    fontFamily: 'OpenSansBold',
    fontSize: 20,
  },

  textoinfo: {
    fontFamily: 'OpenSansBold',
    fontSize: '20%',
    diplay: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%'
  },

  dados: {
    fontFamily: 'OpenSans',
    fontSize: 18,
  },

  informacaoTexto: {
    fontFamily: 'OpenSans',
    fontSize: 17,
    marginTop: 10,
    textAlign: 'left',
    lineHeight: 30, // Ajuste para maior espaçamento entre linhas
    width: '100%',
    flexWrap: 'wrap', // Faz com que o texto quebre a linha quando necessário
  },

  caixa: {
    width: '90%',
    marginTop: 20, // Ajusta o espaçamento da caixa
  },

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
    alignItems: 'center',
    width: '105%',
    paddingBottom: 10,
  },

  letraEfooter: {
    fontFamily: 'shrikhand',
    fontSize: 63,
    color: '#04084E',
    marginBottom: 75,
    marginLeft: 10
  },

  letraVfooter: {
    fontFamily: 'OpenSansBold',
    fontSize: 50,
    color: '#04084E',
    marginBottom: 75,
    paddingRight: 22
  },

  imagemFooterlivro: {
    height: 45,
    width: 60,
    marginLeft: 0,
    marginBottom: 75,
  },

  imagemFooterchat: {
    height: 50,
    width: 50,
    marginBottom: 75,
    marginLeft: 0,
  },
});
