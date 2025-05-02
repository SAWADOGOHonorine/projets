import React from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export default function LoginForm({ onSubmit }) {
  const { control, handleSubmit } = useForm();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        name="email"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} onChangeText={onChange} value={value} placeholder="ex: prof@gansbeogo.com" />
        )}
      />

      <Text style={styles.label}>Mot de passe</Text>
      <Controller
        control={control}
        name="password"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} secureTextEntry onChangeText={onChange} value={value} placeholder="******" />
        )}
      />

      <Button title="Se connecter" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 14,
    borderRadius: 8,
  },
});
