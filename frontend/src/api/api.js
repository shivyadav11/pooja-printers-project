import axios from "axios";

const api = axios.create({
  baseURL: "https://pooja-printers-backend.onrender.com/api",
});

// Auto add token in headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
