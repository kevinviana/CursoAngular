const mongoose = require('mongoose');
const Product = require('./product');
const Faker = require('faker');

mongoose.connect('mongodb://localhost:27017/http-client', { useNewUrlParser: true, useUnifiedTopology: true });

async function generateProducts() {
    for (let i = 0; i < 10; i++) {
        let p = new Product({
            name: Faker.commerce.productName(),
            department: Faker.commerce.department(),
            price: Faker.commerce.price()
        });

        try {
            await p.save();
        } catch (error) {
            console.error(error);
        }
    }
}

generateProducts().then(() => mongoose.disconnect())