import React, { useState, useEffect } from 'react';
import { View, TextInput, Image, Alert, Keyboard, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView, ScrollView, Platform, Modal, Share } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Font from 'expo-font';
import * as Location from 'expo-location'; 
import { Linking } from 'react-native'; 

const NewPostScreen = ({ navigation, route }) => {
  const [newPost, setNewPost] = useState('');
  const [image, setImage] = useState(null);
  const [fontsLoaded, setFontsLoaded] = useState(false); 
  const [link, setLink] = useState(''); 
  const [location, setLocation] = useState('');  
  const [isModalVisible, setModalVisible] = useState(false); 
  const [isLocationModalVisible, setLocationModalVisible] = useState(false); 
  const [userLocation, setUserLocation] = useState(null);  

  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  const handleAddLink = () => {
    setModalVisible(true);
  };

  const handleModalSubmit = () => {
    if (link) {
      setModalVisible(false);
    } else {
      Alert.alert('Erro', 'Por favor, insira um link válido!');
    }
  };

  const handleGetLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos da permissão para acessar sua localização!');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    setUserLocation({ latitude, longitude });

    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    Linking.openURL(googleMapsUrl);
    
    setLocation(`Lat: ${latitude.toFixed(4)}, Long: ${longitude.toFixed(4)}`);
    setLocationModalVisible(false);
  };

  const sharePost = async () => {
    try {
      const message = newPost.trim() ? newPost : 'Veja minha nova publicação!';
      const imageUrl = image ? { url: image } : {};
      const linkUrl = link ? { url: link } : {};
      const locationText = location ? `Localização: ${location}` : {};

      const result = await Share.share({
        message,
        ...imageUrl,
        ...linkUrl,
        ...locationText,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Compartilhado com a atividade: ', result.activityType);
        } else {
          console.log('Post compartilhado com sucesso!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('O compartilhamento foi descartado');
      }
    } catch (error) {
      console.error('Erro ao compartilhar o post:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar compartilhar o post.');
    }
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos da permissão para acessar suas fotos!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const submitPost = () => {
    if (newPost.trim() !== '' || image) {
      if (route.params && route.params.addPost) {
        route.params.addPost({ text: newPost, image });
      } else {
        Alert.alert('Erro', 'Função para adicionar post não está disponível.');
        return;
      }
      navigation.goBack();
    } else {
      Alert.alert('Erro', 'Você precisa escrever algo ou adicionar uma imagem!');
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

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.buttonImage} onPress={handleHomePress}>
            <Image source={require('../assets/voltar.png')} style={styles.voltar} />
          </TouchableOpacity>
          <Text style={styles.textTitulo}>Nova Publicação</Text>
        </View>

        <View style={styles.imageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.previewImage} />
          ) : (
            <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
              <Image source={require('../assets/camera.png')} style={styles.cameraImage} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Escreva sua postagem..."
            value={newPost}
            onChangeText={setNewPost}
            style={styles.input}
            multiline
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={styles.shareContainer}>
          <TouchableOpacity onPress={sharePost} style={styles.shareButton}>
            <Image source={require('../assets/compartilhar.png')} style={styles.shareButtonIcon} />
            <Text style={styles.shareButtonText}>Compartilhar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.shareContainer}>
          <TouchableOpacity onPress={handleAddLink} style={styles.shareButton}>
            <Image source={require('../assets/link.png')} style={styles.shareButtonIcon} />
            <Text style={styles.addLinkText}>Adicionar Link</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.shareContainer}>
          <TouchableOpacity onPress={handleGetLocation} style={styles.shareButton}>
            <Image source={require('../assets/localizacao.png')} style={styles.shareButtonIcon} />
            <Text style={styles.addLinkText}>Adicionar Localização</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Novo botão de enviar post */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={submitPost} style={styles.postButton}>
          <Text style={styles.postButtonText}>Publicar</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para link */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Digite o Link:</Text>
            <TextInput
              style={styles.modalInput}
              value={link}
              onChangeText={setLink}
              placeholder="Insira o link"
            />
            <View style={styles.modalActions}>
              <TouchableOpacity onPress={handleModalSubmit} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Adicionar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal para localização */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isLocationModalVisible}
        onRequestClose={() => setLocationModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Aguardando Localização...</Text>
            <TouchableOpacity onPress={handleGetLocation} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Obter Localização</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setLocationModalVisible(false)} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
   modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#580113',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },

  addLinkText: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'OpenSans',
  },

  shareContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  shareButton: {
    paddingVertical: 10,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.025)',
    marginVertical: 0,
  },
  shareButtonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  shareButtonText: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'OpenSans',
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: '#ECEDFE',
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1, // Permite que o conteúdo seja rolado
    justifyContent: 'flex-start',
    paddingBottom: 80, // Adicionando espaço extra para o footer
  },
  inputContainer: {
    flexDirection: 'row', // Alinha o campo de texto e o botão de forma horizontal
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    padding: 10,
    flex: 1, // O campo de texto ocupa todo o espaço disponível
    textAlignVertical: 'top', // Alinha o texto no topo do TextInput
    fontSize: 16, // Ajuste do tamanho da fonte para garantir que o placeholder fique visível
  },
  previewImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    position: 'relative', // Permite o botão ser posicionado sobre a imagem
  },
  imageButton: {
    position: 'absolute', // Faz o botão ficar dentro da área da imagem
    top: '50%',           // Posiciona o botão no centro vertical da área da imagem
    left: '50%',          // Centraliza horizontalmente
    transform: [{ translateX: -25 }, { translateY: -25 }], // Ajusta para o botão ficar centralizado
    backgroundColor: 'transparent', // Transparente, já que estamos usando uma imagem
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,          // Adiciona uma sombra para destacar o botão
  },
  cameraImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain', // Garante que a imagem se ajuste corretamente
  },
  voltar: {
    width: 45,
    height: 45,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center', // Alinha o título e o botão no centro verticalmente
    marginBottom: 20,
  },
  textTitulo: {
    fontSize: 34,
    textAlign: 'center',
    marginLeft: 20,
    paddingTop: 40,
    flex: 1,
    fontFamily: 'OpenSans',
  },
  buttonImage:{
    paddingLeft: 5,
    paddingTop: 40,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 13,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postButton: {
    backgroundColor: '#1B7AEE',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  postButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NewPostScreen;