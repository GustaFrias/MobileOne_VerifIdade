import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7', // Fundo claro e moderno
    padding: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10, // Bordas arredondadas
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff', // Fundo branco
    shadowColor: '#000', // Sombra
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // Sombra no Android
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 10, // Bordas arredondadas
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000', // Sombra
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // Sombra no Android
  },
  buttonText: {
    color: '#fff', // Texto branco
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultadoContainer: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
  },
  resultadoText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});