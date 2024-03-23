import axios from "axios";

export const API_URL = "https://workintech-fe-ecommerce.onrender.com";

// USER REQUESTS

export async function createUser(userData) {
  const res = await axios.post(`${API_URL}/signup`, userData);
  return res.data;
}
