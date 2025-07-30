import { getApiBaseUrl, getProductImageUrl as getImageUrl } from '../config/api.js';

// Fetch products by category (computers, mobiles, laptops, pendrives, or all)
export const getProducts = async (category = "") => {
  try {
    const baseURL = getApiBaseUrl();
    const url = category
      ? `${baseURL}/api/products?category=${category}`
      : `${baseURL}/api/products`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array on error
  }
};

// Get product image URL
export const getProductImageUrl = (imagePath) => {
  return getImageUrl(imagePath);
};
