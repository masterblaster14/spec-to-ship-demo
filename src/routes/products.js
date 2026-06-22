BUILT CODE  (Memory ON — decisions recalled from Parcle)

Applied: D-001 · D-002 · D-003

// D-003: bearer token auth required
app.get('/products', requireBearerAuth, (req, res) => {
  res.json([{
    id:       1,
    name:     'Widget',
    price:    1999,      // D-001: integer cents (NOT 19.99)
    category: 'tools',  // D-002: snake_case keys throughout
  }]);
});