import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import {useFonts} from 'expo-font';

export default function PeriflP({navigation}) {
    const [fontsLoaded] = useFonts({
    'OpenSansBold': require('../fontes/OpenSans-Bold.ttf'),
    'shrikhand': require('../fontes/Shrikhand-Regular.otf'),
    'OpenSans': require('../fontes/OpenSans-Regular.ttf'),
    'OpenSauce': require('../fontes/OpenSauce.ttf'),
    'BukhariScript': require('../fontes/BukhariScript.ttf')
  });

  // Verifica se houve erro no carregamento das fontes
  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>; // Mensagem de carregamento
  }

  const { width } = Dimensions.get('window');

  return (
    <View style={styles.fundo}>
        <View style={styles.alinharHorizontal}>
          <TouchableOpacity style={styles.circulo} onPress={() => navigation.navigate('Home')}>
            <Image
              style={styles.seta}
              source={require('../assets/setaberta.png')}
            />
          </TouchableOpacity>
      <Image style={styles.perfil} source={require('../assets/perfil.png')} />
      <TouchableOpacity style={styles.editar}>
            <Image
              style={styles.editarLapis}
              source={require('../assets/lapis.png')}
            />
          </TouchableOpacity>
          
        </View>

<Text style={[styles.nomeUsuario, { width: width * 0.5 }]}>Nome de Usuário</Text>

      <View style={styles.ladoaladoPrincipal}>
      
        <TouchableOpacity style={styles.containerPostagem}>
          <Image style={styles.postagensI} source={require('../assets/postagem.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.curtidasI} source={require('../assets/curtida.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.salvosI} source={require('../assets/salvar.png')} />
        </TouchableOpacity>
        
      </View>
      <View style = {styles.separadorCima} />

      <View style={styles.separador} />
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.letraEfooter}>e</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.imagemFooterlivro} source={require('../assets/Livro.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.imagemFooterchat} source={require('../assets/Chat.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.letraVfooter}>V</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: '#ECEDFE',
    width: '100%',
    height: '110%',
    marginTop: '-15%'
  },

  alinharHorizontal:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '15%'
  },

  seta: {
    width: 30,
    height: 30,
  },

  editarLapis: {
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
    marginTop: '6%',
    display: 'flex',
    marginRight: '15%'
  },

  editar: {
    backgroundColor: '#580113',
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '6%',
    display: 'flex',
    marginLeft: '21%'
  },

    nomeUsuario: {
    fontFamily: 'OpenSansBold',
    fontSize: 20,
    height: 35,  // Definindo altura fixa
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#1f1f1f',
    color: 'white',
    padding: 4.5,  // Ajustando o padding
    borderRadius: 11,  // Definindo valor numérico
    overflow: 'hidden',
    marginBottom: '5%'
  },

  postagensI: {
    width: 50,
    height: 50,
  },    
  
  curtidasI: {
    width: 56,
    height: 55,
  },

  salvosI: {
    width: 42,
    height: 53,
  },

  perfil: {
    height: 170,
    width: 140,
    marginRight: '-8%',
  },

    separadorCima: {
    borderBottomWidth: 3,
    borderBottomColor: '#1f1f1f',
    width: '100%',  
    marginVertical: 2,
  },

  ladoaladoPrincipal: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '1.5%',
    width: '100%',
    padding: '0%',
    paddingTop: '1%'
  },

  containerPostagem: {
    alignItems: 'center',
    borderBottomWidth: 3, // Espessura do sublinhado
    borderBottomColor: '#04084e', // Cor semelhante à imagem "Postagens.png"
    paddingBottom: 5, // Espaço entre a imagem e o sublinhado
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ECEDFE',
    width: '100%',
    marginTop: '0%'
  },

  letraEfooter: {
    fontFamily: 'shrikhand',
    fontSize: 63,
    color: '#04084E',
    paddingLeft: '5%'
  },

  letraVfooter: {
    fontFamily: 'OpenSansBold',
    fontSize: 50,
    color: '#04084E',
    paddingRight: 22
  },

  imagemFooterlivro: {
    height: 45,
    width: 60,
  },

  imagemFooterchat: {
    height: 50,
    width: 50,
  },

  separador: {
    borderBottomWidth: 3,
    borderBottomColor: '#1f1f1f',
    width: '100%',  
    marginVertical: 2,
    marginTop: '100%'
  }
});