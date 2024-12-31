export function getImageUrl(filename) {
  const baseUrl = process.env.VUE_APP_DOMAIN_NAME || 'https://khmenu.cloud/'; 
  console.log('baseUrl', baseUrl);
  return `${baseUrl}uploads/${filename}`;
}