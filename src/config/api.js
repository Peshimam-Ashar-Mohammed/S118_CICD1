// API Configuration
const API_CONFIG = {
  development: {
    baseURL: 'http://localhost:8080',
  },
  production: {
    // Update this to your actual deployed backend URL
    baseURL: 'https://your-backend-url.com',
  }
};

// Get current environment
const isDevelopment = import.meta.env.DEV;
const config = isDevelopment ? API_CONFIG.development : API_CONFIG.production;

export const getApiBaseUrl = () => config.baseURL;

export const getProductImageUrl = (imagePath) => {
  return `${config.baseURL}/api/products/images/${imagePath}`;
}; 