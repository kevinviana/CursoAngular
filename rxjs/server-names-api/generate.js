const mongoose = require("mongoose");
const faker = require('faker');
const Person = require('./person');

mongoose.connect('mongodb://localhost:27017/rxjsdb', { useNewUrlParser: true, useUnifiedTopology: true });

async function createRandomPeople() {
  const n = 1000;
  for (let i = 0; i < n; i++) {
    let person = new Person({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      city: faker.address.city(),
      country: faker.address.country(),
    });
    try {
      await person.save();

    } catch (error) {
      console.error('Unable to generate a new person!');
    }
  }
}

createRandomPeople().then(()=>{
    mongoose.disconnect();    
    console.log("OK");
})