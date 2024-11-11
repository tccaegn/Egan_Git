import React, { useState, useEffect, useRef } from 'react';
import { Text, Image, View, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as Clipboard from 'expo-clipboard';

const ChatScreen = ({navigation}) => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [recipientToken, setRecipientToken] = useState('');
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const notificationListener = useRef();
  const responseListener = useRef();

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  async function sendPushNotification(token, messageBody) {
    const message = {
      to: token,
      sound: 'default',
      title: 'Nova mensagem',
      body: messageBody,
      data: { someData: 'goes here' },
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  }

  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        Alert.alert('Erro', 'Não foi possível obter token de notificação!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log('Expo Push Token:', token);
    } else {
      Alert.alert('Erro', 'Necessário um dispositivo físico para enviar notificações');
    }
    return token;
  }

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      const { body } = notification.request.content;
      setMessages((prevMessages) => [...prevMessages, { text: body, sentByMe: false }]);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const handleSendMessage = async () => {
    if (messageText.trim() === '' || recipientToken === '') {
      Alert.alert('Erro', 'Por favor, insira uma mensagem e um token de destinatário.');
      return;
    }
    setMessages((prevMessages) => [...prevMessages, { text: messageText, sentByMe: true }]);
    await sendPushNotification(recipientToken, messageText);
    setMessageText('');
  };

  const handleGenerateToken = async () => {
    const token = await registerForPushNotificationsAsync();
    setExpoPushToken(token);
    await Clipboard.setStringAsync(token);
    Alert.alert('Token Copiado', token);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0} // Ajuste o offset para um valor menor
    >
      <Image style={styles.logo} source={require('../assets/logo_3.png')} />
      <TouchableOpacity style={styles.circulo} onPress={() => navigation.navigate('Home')}>
        <Image style={styles.seta} source={require('../assets/setaberta.png')} />
      </TouchableOpacity>
      <ScrollView style={styles.messagesContainer} contentContainerStyle={{ paddingBottom: 20 }}>
        {messages.map((msg, index) => (
          <Text
            key={index}
            style={[styles.message, msg.sentByMe ? styles.sentMessage : styles.receivedMessage]}
          >
            {msg.text}
          </Text>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <View style={styles.tokenContainer}>
          <TextInput
            style={styles.inputToken}
            onChangeText={setRecipientToken}
            value={recipientToken}
            placeholder="Token do destinatário"
            placeholderTextColor="#888"
          />
          <TouchableOpacity onPress={handleGenerateToken} style={styles.generateButton}>
            <Text style={styles.buttonText}>Gerar Token</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.messageContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setMessageText}
            value={messageText}
            placeholder="Digite sua mensagem"
            placeholderTextColor="#888"
            selectionColor="#fff"
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity onPress={handleSendMessage} style={styles.generateButton}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEDFE',
    alignItems: 'center',
  },
  messagesContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
  },
  message: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    maxWidth: '80%',
  },
  sentMessage: {
    marginRight: 10,
    alignSelf: 'flex-end',
    backgroundColor: '#04084E',
    color: '#ecedfe',
  },
  receivedMessage: {
    marginLeft: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#74AFF4',
    color: '#04084E',
  },
  inputContainer: {
    width: '90%',
    alignItems: 'center',
    paddingBottom: 5, // Diminui ainda mais o padding
  },
  tokenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '97%',
    marginBottom: 3, // Diminui o espaçamento
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '97%',
    marginTop: 3,
    paddingBottom: 20 
  },
  inputToken: {
    height: 40,
    width: '70%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 5
  },
  input: {
    height: 40,
    width: '83%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 5,
    color: '#000',
  },
  generateButton: {
    backgroundColor: '#580112',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  logo: {
    marginTop: 60,
    marginLeft: 15,
    justifyContent: 'center',
    borderRadius: 10,
    height: 90,
    width: 190,
  },
  circulo: {
    backgroundColor: '#580113',
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top: -70,
    marginLeft: -320,
  },
  seta: {
    width: 30,
    height: 30,
  },
});

export default ChatScreen;