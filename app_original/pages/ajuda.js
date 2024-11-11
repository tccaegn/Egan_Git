import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

export default function Ajuda({navigation}) {
  const [fontsLoaded] = useFonts({
    'OpenSansBold': require('../fontes/OpenSans-Bold.ttf'),
    'shrikhand': require('../fontes/Shrikhand-Regular.otf'),
    'OpenSans': require('../fontes/OpenSans-Regular.ttf'),
    'OpenSauce': require('../fontes/OpenSauce.ttf'),
    'BukhariScript': require('../fontes/BukhariScript.ttf')
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }

  return (
    <View style={styles.fundo}>
      <View style={styles.horizontal}>
        <TouchableOpacity style={styles.circulo} onPress={() => navigation.navigate('Home')}>
          <Image style={styles.seta} source={require('../assets/setaberta.png')} />
        </TouchableOpacity>
        <Text style={styles.central}>Central de Ajuda</Text>
      </View>

      <View style={styles.conteudo}>
        <Text style={styles.informacoes}>Informações para Contato:</Text>
        <Text style={styles.texto}>E-mail: tccaegn@gmail.com</Text>
        <Text style={styles.texto}>WhatsApp: (12) 99675-2556</Text>
        <Text style={styles.texto}>Instagram: EGAN_School</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECEDFE',
    paddingHorizontal: 20,
  },
  seta: {
    width: 24,
    height: 24,
  },
  circulo: {
    backgroundColor: '#580113',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  central: {
    fontFamily: 'OpenSauce',
    fontSize: 28,
    color: '#580113',
  },
  conteudo: {
    alignItems: 'center',
    width: '100%',
  },
  informacoes: {
    fontFamily: 'OpenSansBold',
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    fontFamily: 'OpenSans',
    color: '#333',
    marginTop: 10,
  },
});
