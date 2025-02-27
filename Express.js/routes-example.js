const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('welcome to home page');
})

app.get('/products',(req, res) => {
    const products =[
        {
            id: 1,
            name: 'Product 1',
            price: 99.99
        },
        {
            id: 2,
            name: 'Product 2',
            price: 199.99
        },
        {
            id: 3,
            name: 'Product 3',
            price: 399.99
        }
    ]
    res.json(products);
})

// get a single prduct ... dynamically
app.get('/products/:id', (req, res) => {
    const products =[
        {
            id: 1,
            name: 'Product 1',
            price: 99.99
        },
        {
            id: 2,
            name: 'Product 2',
            price: 199.99
        },
        {
            id: 3,
            name: 'Product 3',
            price: 399.99
        }
    ]
    const productId = parseInt(req.params.id);
    const getSingleProduct = products.find(product=> product.id === productId);
    if(getSingleProduct){
        res.json(getSingleProduct);
    }else{
        res.status(404).json({message: 'Product not found'});
    }
})

const port = 3000

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})