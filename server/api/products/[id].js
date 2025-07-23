// Handle GET by id, PUT, DELETE
let products = [
  { id: 1, name: 'iPhone 15', price: 999 },
  { id: 2, name: 'MacBook Pro', price: 1999 },
];


export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params?.id || '0');
  const method = event.method;

  if (method === 'GET') {
    return products.find(p => p.id === id);
  }

  if (method === 'PUT') {
    const body = await readBody(event);
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...body };
      return products[index];
    }
  }

  if (method === 'DELETE') {
    products = products.filter(p => p.id !== id);
    return { success: true };
  }

  return { error: 'Invalid request' };
});
