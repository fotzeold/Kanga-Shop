const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Movie = require('./models/category');
const cors = require('cors');

app.use(cors());

const PORT = 4000;
const URL = 'mongodb+srv://forzeold:zerx1907@cluster0.pdi2tqy.mongodb.net/moviebox?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);

mongoose
	.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected'))
	.catch(err => console.log(err))

app.listen(PORT, (err) => {
	err ? console.log(err) : console.log(`Super: ${PORT}`);
})

app.get('/movies', (req, res) => {
	Movie
		.find()
		.then((movies) => {
			res
				.status(200)
				.json(movies)
		})
		.catch(() => {
			res
				.status(500)
				.json('wrong');
		})
})
