// D-003: bearer token auth required
app.get('/products', requireBearerAuth, (req, res) => {
  res.json([{ id: 1, name: 'Widget', price: 1999, category: 'tools' }]); // D-001 integer cents, D-002 snake_case
});