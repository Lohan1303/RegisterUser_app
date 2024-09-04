import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './Styles.js';

export default function App() {
  const [inputName, setName] = useState('');
  const [inputCodigo, setCodigo] = useState('');
  const [inputEmail, setEmail] = useState('');
  const [inputPw, setPw] = useState('');
  const [inputConfirmPw, setConfirmPw] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.tittle}>User Register</Text>
      </View>

      <ScrollView style={styles.main}>
        <Text style={styles.label}>Codigo: </Text>
        <TextInput
          style={styles.input}
          value={inputCodigo}
          onChangeText={(text) => setCodigo(text)}
        />

        <Text style={styles.label}>Nome: </Text>
        <TextInput
          style={styles.input}
          value={inputName}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.label}>E-mail: </Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          value={inputEmail}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.label}>Senha: </Text>
        <TextInput
          style={styles.input}
          value={inputPw}
          onChangeText={(text) => setPw(text)}
        />

        <Text style={styles.label}>Confirma senha: </Text>
        <TextInput
          style={styles.input}
          value={inputConfirmPw}
          onChangeText={(text) => setConfirmPw(text)}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Salvar</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Carregar</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Limpar</Text>
          </TouchableOpacity> 
        </View>
      </ScrollView>

      {/* Footer removido se não for necessário */}
      <StatusBar style="auto" />
    </View>
  );
}
