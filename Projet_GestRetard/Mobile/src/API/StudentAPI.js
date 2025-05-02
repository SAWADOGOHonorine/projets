import { api } from './api';

// Récupérer tous les étudiants
export const fetchStudents = async () => {
  try {
    const response = await api.get('/students');
    return response.data;
  } catch (error) {
    console.error('Erreur fetchStudents:', error.message);
    throw error;
  }
};



// Mettre à jour le statut de retard ou d'absence
export const updateStudentStatus = async (studentId, type) => {
  try {
    const response = await api.put('/students/${studentId}/status', {
      type,                             // 'retard' ou 'absence'
    });
    return response.data;
  } catch (error) {
    console.error('Erreur updateStudentStatus:', error.message);
    throw error;
  }
};


// Ajouter un nouvel étudiant (optionnel)
export const addStudent = async (studentData) => {
  try {
    const response = await api.post('/add/students', studentData);
    return response.data;
  } catch (error) {
    console.error('Erreur addStudent:', error.message);
    throw error;
  }
};
