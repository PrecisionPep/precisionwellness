// Base URL for custom domain (root)
const BASE_URL = '/';

// Helper function to get asset paths with base URL
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Return path with base URL
  return `${BASE_URL}${cleanPath}`;
};

