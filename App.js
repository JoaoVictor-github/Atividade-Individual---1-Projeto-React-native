import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.name}>João Victor Santos de Assis</Text>
      <Image source={require('./assets/IMG-20231128-WA0032.jpg')} style={styles.image} />
      <Button
        title="Ver Currículo"
        onPress={() => navigation.navigate('Voltar')}
        color="#27ae60" // Cor verde para o botão
      />
    </View>
  );
}

function ResumeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.resumeTitle}>Currículo</Text>
      <Text style={styles.resumeText}>Idade: 19 anos</Text>
      <Text style={styles.resumeText}>Curso: Análise e Desenvolvimento de Sistemas (3º período)</Text>
      <Text style={styles.resumeText}>Instituição: Faculdade Senac</Text>
      <Text style={styles.resumeText}>Ano de início: 2023</Text>
      <Text style={styles.resumeText}>Ano de conclusão: 2025</Text>
      <Text style={styles.resumeText}>Experiência Profissional: Não tenho experiência profissional</Text>
      <Text style={styles.resumeText}>Objetivo: Em busca do primeiro emprego</Text>
      <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
        color="#27ae60" // Cor verde para o botão
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerStyle: { backgroundColor: '#27ae60' }, headerTintColor: '#ffffff' }} />
        <Stack.Screen name="Voltar" component={ResumeScreen} options={{ title: 'Voltar', headerStyle: { backgroundColor: '#27ae60' }, headerTintColor: '#ffffff' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50', // Fundo preto meio cinza
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff', // Cor branca para o texto
  },
  image: {
    width: 145,
    height: 190,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 20, // Tornar a imagem redonda
    borderWidth: 5, // Adicionar uma borda
    borderColor: '#27ae60', // Cor verde para a borda
  },
  resumeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff', // Cor branca para o texto
  },
  resumeText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#ffffff', // Cor branca para o texto
  },
});
