import {Dimensions, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import PagerView from 'react-native-pager-view';

const { width, height } = Dimensions.get('window');

const Carrossel = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0}>
        <View style={styles.page} key="1">
          <Image style={styles.imagem} source={require('../assets/c1.png')} />
        </View>
        <View style={styles.page} key="2">
          <Image style={styles.imagem} source={require('../assets/c2.png')} />
        </View>
        <View style={styles.page} key="3">
          <Image style={styles.imagem} source={require('../assets/c3.png')} />
        </View>
        <View style={styles.page} key="4">
          <TouchableOpacity onPress={() => navigation.navigate('Identificacao')}>
            <Image style={styles.imagem} source={require('../assets/c4.png')} />
          </TouchableOpacity>
        </View>
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    height,
    width,
    resizeMode: 'cover',
  },
});

export default Carrossel;