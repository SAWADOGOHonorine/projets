import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import StatCard from '../components/StatCard';

export default function HomeScreen() {
  const [stats, setStats] = useState({
    totalEtudiants: 0,
    totalRetards: 0,
    totalAbsences: 0,
    nomClasse: 'Classe A',
  });

  const [etudiants, setEtudiants] = useState([]);

  useEffect(() => {
    // TODO: Remplacer par des appels API
    setStats({
      totalEtudiants: 30,
      totalRetards: 5,
      totalAbsences: 3,
      nomClasse: 'L1 Informatique',
    });

    setEtudiants([
      { id: 1, 
        nom: 'Sow', 
        prenom: 'Awa', 
        matricule: '202301', 
        retard: 1, 
        absence: 0 },
      { id: 2, 
        nom: 'Diallo', 
        prenom: 'Ibrahima', 
        matricule: '202302', 
        retard: 0, 
        absence: 1 },
      { id: 3, 
        nom: 'Barry', 
        prenom: 'Mamadou', 
        matricule: '202303', 
        retard: 0, 
        absence: 0 },
      // ...
    ]);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Statistiques</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardContainer}>
        <StatCard title="Total Classe" value={stats.totalEtudiants} backgroundColor="#4CAF50" />
        <StatCard title="Total Retards" value={stats.totalRetards} backgroundColor="#FFC107" />
        <StatCard title="Total Absences" value={stats.totalAbsences} backgroundColor="#F44336" />
        <StatCard title="Classe" value={stats.nomClasse} backgroundColor="#2196F3" />
      </ScrollView>

      <Text style={styles.subtitle}>Liste des étudiants</Text>
      <FlatList
        data={etudiants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.nom}</Text>
            <Text style={styles.cell}>{item.prenom}</Text>
            <Text style={styles.cell}>{item.matricule}</Text>
            <Text style={styles.cell}>Retard: {item.retard}</Text>
            <Text style={styles.cell}>Absence: {item.absence}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
  },
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
