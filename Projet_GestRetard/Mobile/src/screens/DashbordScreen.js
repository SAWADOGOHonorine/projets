import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';

export default function DashboardScreen() {
  const [professeur, setProfesseur] = useState({
    nom: 'Mr. Traoré',
    classe: 'L1 Informatique',
    module: 'Programmation',
  });

  const [etudiants, setEtudiants] = useState([]);

  useEffect(() => {
    // Simuler des données initiales (à remplacer par API plus tard)
    setEtudiants([
      { id: 1, 
        nom: 'SAWADOGO', 
        prenom: 'Awa', 
        matricule: '202301', 
        retard: 0, 
        absence: 0,
      },
      { id: 2, 
        nom: 'Diallo', 
        prenom: 'Ibrahima', 
        matricule: '202302', 
        retard: 0, 
        absence: 0,
      },
      { id: 3, 
        nom: 'Barry', 
        prenom: 'Mamadou', 
        matricule: '202303', 
        retard: 0, 
        absence: 0 },
    ]);
  }, []);

  const marquerStatut = (id, type) => {
    setEtudiants((prev) =>
      prev.map((etudiant) =>
        etudiant.id === id
          ? { ...etudiant, [type]: 1 }
          : etudiant
      )
    );

    Alert.alert('Succès', `Statut "${type}" marqué pour l'étudiant.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tableau de bord</Text>
      <View style={styles.header}>
        <Text style={styles.headerText}>Professeur : {professeur.nom}</Text>
        <Text style={styles.headerText}>Classe : {professeur.classe}</Text>
        <Text style={styles.headerText}>Module : {professeur.module}</Text>
      </View>

      <FlatList
        data={etudiants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.studentRow}>
            <View style={styles.studentInfo}>
              <Text style={styles.name}>{item.nom} {item.prenom}</Text>
              <Text style={styles.matricule}>Matricule : {item.matricule}</Text>
            </View>
            <View style={styles.actions}>
              <Button
                title="Retard"
                color="#FFC107"
                onPress={() => marquerStatut(item.id, 'retard')}
              />
              <View style={{ height: 8 }} />
              <Button
                title="Absence"
                color="#F44336"
                onPress={() => marquerStatut(item.id, 'absence')}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  header: {
    marginBottom: 16,
    backgroundColor: '#e0f7fa',
    padding: 12,
    borderRadius: 8,
  },
  headerText: {
    fontSize: 14,
    marginBottom: 4,
  },
  studentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  studentInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  matricule: {
    fontSize: 14,
    color: '#555',
  },
  actions: {
    width: 100,
    justifyContent: 'center',
  },
});
