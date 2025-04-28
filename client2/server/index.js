const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

// Use CORS middleware to allow requests from the frontend origin
app.use(cors());

// Your API route
app.get('/api/stores', (req, res) => {
    console.log('Awaiting someone');
    const DataStores = [
        {
          name: "Tech Gadgets Store",
          creator: {
            name: "John Doe",
            email: "john.doe@example.com",
            profilePic: "/Avatar.jpg",
            id: "creator_001"
          },
          dateOfCreation: new Date("2023-05-15"),
          products: [
            { 
              id: "prod_001", 
              name: "Smartphone", 
              price: 699.99, 
              description: "Latest model smartphone with advanced features", 
              inStock: true,
              image: "/assets/cashoes_02.jpg" // Add image path here
            },
            { 
              id: "prod_002", 
              name: "Laptop", 
              price: 1299.99, 
              description: "High-performance laptop for professionals", 
              inStock: false,
              image: "/assets/bigbag_02.jpg" // Add image path here
            }
          ],
          income: 25000,
          codePin: "1234"
        },
        {
          name: "Fashion Boutique",
          creator: {
            name: "Jane Smith",
            email: "jane.smith@example.com",
            profilePic: "/Avatar.jpg",
            id: "creator_002"
          },
          dateOfCreation: new Date("2024-01-20"),
          products: [
            { 
              id: "prod_003", 
              name: "Summer Dress", 
              price: 59.99, 
              description: "Lightweight summer dress in various colors", 
              inStock: true,
              image: "/assets/glasses_02.jpg" // Add image path here
            },
            { 
              id: "prod_004", 
              name: "Leather Jacket", 
              price: 199.99, 
              description: "Premium quality leather jacket", 
              inStock: true,
              image: "/assets/dress_01.jpg" // Add image path here
            }
          ],
          income: 15000,
          codePin: "5678"
        }
      ];
      
    res.json(DataStores);  // Send the DataStores array as a JSON response
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
