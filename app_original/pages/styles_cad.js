import { StyleSheet } from 'react-native';

const styles_cad = StyleSheet.create({
  
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECEDFE',
  },
  containerGlobal: {
    flex: 1,
    padding: 20,
  },
  logo: {
    height: 120,
    width: 120,
    marginBottom: 20,
    marginTop: 5,
  },
  titulo: {
    color: '#04084E',
    paddingTop: 10,
    fontSize: 35,
    fontFamily: 'shrikhand',
    marginHorizontal: 10,
    textAlign: 'center',
    marginTop: -20,
  },
   entradaDeTexto: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 9,
    padding: 4,
    borderWidth: 1,
    borderRadius: 15,
    width: 340,
    backgroundColor: '#04084E',
    color: 'white',
    fontFamily: 'OpenSans',
  },
  containerSenha: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    width: 340,
    backgroundColor: '#1F1F1F',
  },
  inputSenha: {
      marginBottom: 3,
    flex: 1,
    borderRadius: 15,
    color: 'white',
    fontFamily: 'OpenSans',
  },
  
  senhaButton: {
    padding: 8,
  },
   buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    width: 290,
    height: 45,
    marginTop: 30,
    backgroundColor: '#1B7AEE',
  },
   buttonInner: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text3: {
    alignItems: 'center',
    color: '#04084E',
    paddingTop: 10,
    fontSize: 15,
    marginTop: 60,
  },
  buttonImage:{
    flexDirection: 'row', // Para alinhar a imagem e o texto lado a lado
    paddingLeft: 10,
  },
  voltar: {
    width: 45,
    height: 45,
  }
});

export default styles_cad;