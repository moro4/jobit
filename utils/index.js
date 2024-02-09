export function isImageAvailable(url) {
   if (!url) return false;
   const pattern = new RegExp('^https?:\\/\\/.+', 'i');
   return pattern.test(url);
}