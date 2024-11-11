import React, { useState } from 'react'; 
import { StyleSheet, View, Image, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Keyboard, Modal, Text, FlatList, TextInput, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { Card, FAB } from 'react-native-paper';
import { Menu } from './menu';
import { Ionicons } from '@expo/vector-icons';

const Teste = ({ navigation }) => {
  const [configVisivel, setConfigVisivel] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleConfigPress = () => {
    setConfigVisivel(true);
  };

  const handleCloseConfig = () => {
    setConfigVisivel(false);
  };

   const handlePerfilPress = () => {
    navigation.navigate('PerfilP'); 
  };

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

  const [fontsLoaded] = useFonts({
    OpenSansBold: require('../fontes/OpenSans-Bold.ttf'),
    Shrikhand: require('../fontes/Shrikhand-Regular.otf'),
  });

  const [posts, setPosts] = useState([
    { id: '1', content: 'ETEC_SJC', image: 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/22/2023/10/INSCRICAO.png' },
    { id: '2', content: 'ETEC_SJC', image: 'https://cosmopolis.sp.gov.br/wp-content/uploads/2022/10/312943647_494710909362561_3172410926414732264_n.jpg' },
  ]);

  const addPost = (post) => {
    const newPost = { id: String(posts.length + 1), content: post.text, image: post.image };
    setPosts([newPost, ...posts]);
    filterPosts(searchQuery);
  };

  const filterPosts = (query) => {
    if (query) {
      const filtered = posts.filter(post => post.content.toLowerCase().includes(query.toLowerCase()));
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
    filterPosts(searchQuery); // Refiltrar após a exclusão
  };

  const renderItem = ({ item }) => (
  <Card style={{ marginBottom: 10 }}>
    <Card.Content>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>{item.content}</Text>
        <TouchableOpacity onPress={() => Alert.alert(
          "Excluir Postagem",
          "Tem certeza que deseja excluir esta postagem?",
          [
            { text: "Cancelar", style: "cancel" },
            { text: "Excluir", onPress: () => deletePost(item.id) }
          ]
        )}>
          <Ionicons name="ellipsis-vertical" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      {item.image && (
        <Image
          source={{ uri: item.image }}
          style={{ height: 200, width: '100%', marginTop: 10 }}
        />
      )}
    </Card.Content>
  </Card>
);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ECEDFA' }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/logo_3.png')} />

          <TouchableOpacity style={styles.configButton} onPress={handleConfigPress}>
            <Image style={styles.logo2} source={require('../assets/menu.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.configButton2} onPress={handlePerfilPress}>
            <Image style={styles.logo3} source={require('../assets/perfil.png')} />
          </TouchableOpacity>

          <Modal
            visible={configVisivel}
            animationType='fade'
            transparent={true}
            onRequestClose={handleCloseConfig}
          >
            <Menu onClose={handleCloseConfig} />
          </Modal>
        </View>
      </TouchableWithoutFeedback>

      <View style={{ paddingTop: 40, flex: 9.0 }}>
        {/* Barra de Pesquisa com Ícone à Direita */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Pesquisar postagens..."
            value={searchQuery}
            onChangeText={(text) => {
              setSearchQuery(text);
              filterPosts(text);
            }}
            style={styles.searchInput}
          />
          <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
        </View>

        <FlatList
          data={searchQuery ? filteredPosts : posts}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={{ marginLeft: 20, marginRight: 10, width: 350, marginTop: 40 }}
        />

        <FAB
          style={{
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
            backgroundColor: '#1b7aee',
          }}
          icon="plus"
          onPress={() => navigation.navigate('Postagem', { addPost })}
        />
      </View>

      <View style={{ borderBottomWidth: 3, borderBottomColor: '#1f1f1f', linhawidth: '100%' }} />
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
    </SafeAreaView>
  );
};

export default Teste;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 1,
  },
  logo: {
    height: 90,
    width: 210,
    marginBottom: 20,
    marginTop: 0,
  },
  logo2: {
    height: 25,
    width: 30,
    marginTop: 15,
  },
  logo3: {
    height: 50,
    width: 40,
    marginTop: 5,
  },
  configButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  configButton2: {
    position: 'absolute',
    top: 10,
    right: 20,
    height: 80,
    width: 40
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    borderWidth: 3,
    borderColor: '#1b7aee',
    borderRadius: 12,
    height: 45,
    width: '85%',
    marginLeft: 27,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    height: '100%',
  },
  searchIcon: {
    paddingHorizontal: 10,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ECEDFE',
    marginBottom: -90,
    alignItems: 'center',
    width: '105%',
  },
  letraEfooter: {
    fontFamily: 'shrikhand',
    fontSize: 65,
    color: '#04084E',
    marginBottom: 65,
  },
  letraVfooter: {
    fontFamily: 'OpenSansBold',
    fontSize: 50,
    color: '#04084E',
    marginBottom: 70,
    paddingRight: 22,
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