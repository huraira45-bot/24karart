/**
 * Helper for WooCommerce direct checkout
 * @param {string} productId - The ID from WooCommerce Product page
 * @param {number} quantity - Number of items
 */
export const redirectToCheckout = (productId, quantity = 1) => {
  const baseUrl = window.location.origin + '/checkout/';
  const params = new URLSearchParams();

  // WooCommerce 'Add to Cart' via URL
  params.append('add-to-cart', productId);
  params.append('quantity', quantity);

  window.location.href = `${baseUrl}?${params.toString()}`;
};
