const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./product');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/http-client', { useNewUrlParser: true, useUnifiedTopology: true });

const myLogger = (req, res, next) => {
    console.log(req.body);
    next()
};
app.use(myLogger);

app.get('/products', (req, res) => Product.find().lean().exec((err, prods) => {
    if (err)
        res.status(500).send(err);
    else
        res.status(200).send(prods);
}));

app.get('/products-error', (req, res) => setTimeout(() => {
    res.status(500).send({ msg: "Error message from server" });
}, 2000));

app.get('/products-delay', (req, res) => Product.find().lean().exec((err, prods) => {
    setTimeout(() => {
        if (err)
            res.status(500).send(err);
        else
            res.status(200).send(prods);
    }, 2000);
}));

app.get('/products-ids', (req, res) => Product.find().lean().exec((err, prods) => {
    if (err)
        res.status(500).send(err);
    else
        res.status(200).send(prods.map(p => p._id));
}));

app.get('/products/name/:id', (req, res) => {
    const id = req.params.id;
    Product.findById(id).lean().exec(
        (err, prod) => {
            if (err)
                res.status(500).send(err);
            else if (!prod)
                res.status(404).send({});
            else
                res.status(200).send(prod.name);
        })
});

app.post('/products', (req,res) => {
    p = new Product ({
	name: req.body.name,
	price: req.body.price,
	department: req.body.department
    });
    p.save((err, prod) => {
	if(err) 
	    res.status(500).send(err);
	    else
		res.status(201).send(prod);
})
});

app.delete('/products/:id', (req, res) => {
    Product.deleteOne({_id:req.params.id}, 
	(err) => {
	    if(err)
		res.status(500).send(err);
	    else
		res.status(200).send({});
	});
});


app.patch('/products/:id', (req,res)=>{

	Product.findById(req.params.id, (err, prod) => {
		if(err) 
			res.status(500).send(err);
		else if(!prod)
			res.status(404).send({});
		else
			prod.name = req.body.name;
			prod.price = req.body.price;
			prod.department =  req.body.department;
			prod.save((err, prod)=>{
				if(err) res.status(500).send(err);
				else res.status(200).send(prod);
			});
	});

});

app.listen(3000);
