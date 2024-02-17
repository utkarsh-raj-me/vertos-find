const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Serve the HTML and CSS files
app.use(express.static('public'));

// Sample data for initial testing
let productDetails = {
  itemName: 'An Scientific calculator',
  seller: 'utkarsh sharma',
  price: 100,
  imageUrl: 'https://th.bing.com/th/id/OIP.AGB4vIdp7r2PVkLUeXtHEgHaHa?rs=1&pid=ImgDetMain',
  link: 'https://www.amazon.in/Brief-History-Time-Black-Holes/dp/0553175211/ref=sr_1_2?keywords=a+brief+history+of+time&qid=1701316530&sr=8-2'
};

// Endpoint to get product details
app.get('/getProductDetails', (req, res) => {
  res.json(productDetails);
});

// Add endpoint to update product details
app.post('/updateProductDetails', (req, res) => {
  const { itemName, seller, price, imageUrl, link } = req.body;
  productDetails = { itemName, seller, price, imageUrl, link };
  res.json({ message: 'Product details updated successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

