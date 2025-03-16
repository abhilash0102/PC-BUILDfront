import axios from "axios";

// Use environment variables to determine the API URL
const API_BASE_URL = process.env.REACT_APP_API_URL || "https://pcbuildbackend.onrender.com";

const apiService2 = {
  getAllComponents: async () => {
    const response = await axios.get(`${API_BASE_URL}/admin/components`);
    return response.data;
  },

  addComponent: async (component) => {
    return await axios.post(`${API_BASE_URL}/components`, component);
  },

  deleteComponent: async (id) => {
    return await axios.delete(`${API_BASE_URL}/components/${id}`);
  }
};

export default apiService2;
