import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../Forms/LoginForm';

export default function LoginScreen({ navigation }) {
  const handleLogin = (data) => {

    console.log('Login avec', data);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion Professeur</Text>
      <LoginForm onSubmit={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
