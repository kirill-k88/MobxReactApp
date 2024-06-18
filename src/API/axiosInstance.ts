import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.kinopoisk.dev/v1.4',
  timeout: 1000,
  headers: { 'X-API-KEY': 'R3M2MZ3-2QY451Z-NAF9XE0-EHZRZ1Q', accept: 'application/json' }
});
