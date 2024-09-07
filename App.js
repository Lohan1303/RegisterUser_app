import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Styles.js';

export default function App() {
  const [inputName, setName] = useState('');
  const [inputCodigo, setCodigo] = useState('');
  const [inputEmail, setEmail] = useState('');
  const [inputPw, setPw] = useState('');
  const [inputConfirmPw, setConfirmPw] = useState('');

  const clearInputs = () => {
    setCodigo('');
    setName('');
    setEmail('');
    setPw('');
    setConfirmPw('');
  };

  function validPassword(password) {
    let hasUpperCase = false;
    let hasNumber = false;

    if (password.length < 5) {
      Alert.alert("Erro", "Senha precisa ter mais de 5 caracteres!");
      return false;
    }

    for (let i = 0; i < password.length; i++) {
      if (password[i] === password[i].toUpperCase() && isNaN(password[i])) {
        hasUpperCase = true;
      }
      if (!isNaN(password[i])) {
        hasNumber = true;
      }
    }

    if (!hasUpperCase || !hasNumber) {
      Alert.alert("Erro", "Senha precisa ter uma letra maiúscula e um número!");
      return false;
    }

    return true;
  }

  function validEmail(email) {
    // Regex para validar e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const save = async () => {
    if (inputPw !== inputConfirmPw) {
      Alert.alert("Erro", "As senhas não coincidem!");
      return;
    }

    const codigoNumber = Number(inputCodigo);
    if (codigoNumber <= 0) {
      Alert.alert("Erro", "Código precisa ser maior que 0!");
      return;
    }

    if (inputName.trim() === '') {
      Alert.alert("Erro", "Nome é campo obrigatório!");
      return;
    }

    if (!validEmail(inputEmail)) {
      Alert.alert("Erro", "E-mail inválido!");
      return;
    }

    if (!validPassword(inputPw)) {
      return; // Se a senha não for válida, não prossegue
    }

    const user = {
      codigo: codigoNumber,
      nome: inputName,
      email: inputEmail,
      senha: inputPw,
    };

    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
      Alert.alert("Sucesso", "Usuário salvo com sucesso!");
      clearInputs();
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
      Alert.alert("Erro", "Não foi possível salvar o usuário.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.tittle}>User Register</Text>
      </View>

      <View style={styles.main}>
        <Text style={styles.label}>Código: </Text>
        <TextInput
          style={styles.input}
          value={inputCodigo}
          onChangeText={(text) => setCodigo(text)}
          keyboardType="numeric"
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
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha: </Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={inputPw}
          onChangeText={(text) => setPw(text)}
        />

        <Text style={styles.label}>Confirma senha: </Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={inputConfirmPw}
          onChangeText={(text) => setConfirmPw(text)}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={save}>
            <Text style={styles.textButton}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={clearInputs}>
            <Text style={styles.textButton}>Limpar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <Text style={styles.textButton}>Carregar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
