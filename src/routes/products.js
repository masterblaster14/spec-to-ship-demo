app.get('/products', requireBearerAuth, (req, res) => {
  // In a real application, this would fetch data from a database
  // For this example, we'll use dummy data adhering to the rules.
  const products = [
    {
      id: 'prod_101',
      name: 'Wireless Mouse',
      price: 2499, // D-001: price as integer cents
      category: 'Electronics'
    },
    {
      id: 'prod_102',
      name: 'Mechanical Keyboard',
      price: 12999, // D-001: price as integer cents
      category: 'Electronics'
    },
    {
      id: 'prod_103',
      name: 'Ergonomic Chair',
      price: 34999, // D-001: price as integer cents
      category: 'Office'
    }
  ];

  // D-002: Fields (id, name, price, category) are already snake_case in the dummy data.
  res.json(products);
});