import 'react-native-gesture-handler';
import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importar as páginas
import Splash from './pages/splash';
import Carrossel from './pages/carrossel';
import Identificacao from './pages/identificacao';
import Cad_aluno from './pages/cad_aluno';
import Cad_coordenacao from './pages/cad_coordenacao';
import Home from './pages/home';
import Postagem from './pages/postagem';
import MaterialAul from './pages/materialAul';
import Vestibulares from './pages/vestibulares';
import Vestibulares2 from './pages/vestibulares2';
import Chat from './pages/chat';
import Login from './pages/login';
import Ajuda from './pages/ajuda';
import PerfilP from './pages/perfilP';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerStyle: { backgroundColor: '#1874CD' },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Carrossel"
        component={Carrossel} // Adicionar Carrossel ao Stack
        options={{ headerShown: false}}
      />
       <Stack.Screen
        name="Identificacao"
        component={Identificacao} 
        options={{headerShown: false}} 
      />
      <Stack.Screen
        name="Cad_aluno"
        component={Cad_aluno} 
        options={{headerShown: false}} 
      />
      <Stack.Screen
        name="Cad_coordenacao"
        component={Cad_coordenacao} 
        options={{headerShown: false}} 
      />
      <Stack.Screen
        name="Home"
        component={Home} 
        options={{headerShown: false}} 
      />
      <Stack.Screen
        name="Postagem"
        component={Postagem} 
        options={{headerShown: false}} 
      />
      <Stack.Screen
        name="MaterialAul"
        component={MaterialAul} 
        options={{headerShown: false}} 
      />
      <Stack.Screen
        name="Vestibulares"
        component={Vestibulares} 
        options={{headerShown: false}} 
      />
      <Stack.Screen
        name="Vestibulares2"
        component={Vestibulares2} 
        options={{headerShown: false}} 
      />
      <Stack.Screen
        name="Chat"
        component={Chat} 
        options={{headerShown: false}} 
      />
      <Stack.Screen
        name="Login"
        component={Login} 
        options={{headerShown: false}} 
      />
      <Stack.Screen
        name="Ajuda"
        component={Ajuda} // Adicionar Carrossel ao Stack
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="PerfilP"
        component={PerfilP} // Adicionar Carrossel ao Stack
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#00FFFF' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

export default App;