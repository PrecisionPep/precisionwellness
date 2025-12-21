// Helper function to get asset paths with base URL
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // BASE_URL already includes trailing slash
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

