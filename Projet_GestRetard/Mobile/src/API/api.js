import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:4000/api', // Modifier selon ton IP ou localhost pour Android/iOS
  headers: {
    'Content-Type': 'application/json',
  },
});
