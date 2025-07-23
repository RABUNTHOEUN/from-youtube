// Handle GET (list) and POST (create)
// server/api/products/index.ts
let products = [
  { id: 1, name: 'iPhone 15', price: 999 },
  { id: 2, name: 'MacBook Pro 2020', price: 1999 },
  { id: 3, name: 'MacBook Pro 2024', price: 2999 },
  { id: 4, name: 'MacBook Pro 2025', price: 3999 },
];

export default defineEventHandler((event) => {
  if (event.method === 'GET') {
    return products;
  }
});
