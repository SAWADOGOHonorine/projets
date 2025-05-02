import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentRow({ student }) {
  return (
    <View style={styles.row}>
      <Text style={styles.cell}>{student.nom}</Text>
      <Text style={styles.cell}>{student.prenom}</Text>
      <Text style={styles.cell}>{student.matricule}</Text>
      <Text style={styles.cell}>Retard: {student.retard}</Text>
      <Text style={styles.cell}>Absence: {student.absence}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginBottom: 6,
    borderRadius: 8,
  },
  cell: {
    width: '45%',
    marginRight: '5%',
    marginBottom: 4,
    fontSize: 14,
  },
});
