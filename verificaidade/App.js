import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome as Icon } from '@expo/vector-icons'; // Ícones do Expo
import { styles } from './css/styles';

const App = () => {
  const [idade, setIdade] = useState('');
  const [resultado, setResultado] = useState('');
  const [animation] = useState(new Animated.Value(0)); // Animação

  const verificarIdade = () => {
    const idadeNumero = parseInt(idade, 10);

    if (!isNaN(idadeNumero)) {
      if (idadeNumero >= 18) {
        setResultado('Maior de idade');
      } else {
        setResultado('Menor de idade');
      }
    } else {
      setResultado('Idade inválida');
    }

    // Animação ao verificar a idade
    Animated.timing(animation, {
      toValue: 1,
      duration: 800,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      animation.setValue(0); // Reseta a animação
    });
  };

  const animatedStyle = {
    transform: [
      {
        scale: animation.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [1, 1.2, 1],
        }),
      },
    ],
  };

  return (
    <LinearGradient
      colors={['#6a11cb', '#2575fc']} // Gradiente de fundo
      style={styles.container}
    >
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />
      <TouchableOpacity onPress={verificarIdade}>
        <LinearGradient
          colors={['#778899', '#363636']} // Gradiente no botão
          style={styles.button}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="check" size={20} color="#fff" style={{ marginRight: 10 }} />
            <Text style={styles.buttonText}>Verificar Idade</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <Animated.View style={[styles.resultadoContainer, animatedStyle]}>
        <Text style={styles.resultadoText}>
          {resultado ? `Você é ${resultado.toLowerCase()}` : ''}
        </Text>
      </Animated.View>
    </LinearGradient>
  );
};

export default App;