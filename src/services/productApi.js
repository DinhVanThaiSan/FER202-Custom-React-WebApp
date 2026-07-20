export const fetchProducts = async () => {
  try {
    const response = await fetch('/data/products.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch local data: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Local API Fetch Error:', error);
    throw error;
  }
};

// Kept for LO7 requirement - to be used in a later phase for a secondary feature
export const fetchPublicProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error(`Failed to fetch public data: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Public API Fetch Error:', error);
    throw error;
  }
};
