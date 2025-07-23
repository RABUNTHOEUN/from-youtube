// Handle GET (list) and POST (create)
// server/api/products/index.ts
let products = [
  { id: 1, name: 'iPhone 15', price: 999 },
  { id: 2, name: 'MacBook Pro', price: 1999 },
];

export default defineEventHandler((event) => {
  
  if (event.method === 'GET') {
    return products;
  }
});
