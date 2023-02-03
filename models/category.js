const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/*const categorySchema = new Schema({
	id: { type: Object },
	name: { type: String },
	clothes: [{
		price: { type: Number },
		name: { type: String },
		size: { type: Array },
		color: { type: Array },
		description: { type: String },
		markDay: { type: Boolean },
		markNew: { type: Boolean },
		markHot: { type: Boolean },
		markSale: { type: Boolean },
		season: { type: String },
		type: { type: String },
		rate: { type: Number },
	}]
});

const Cat = mongoose.model('Cat', categorySchema);

module.exports = Cat;
*/

const categorySchema = new Schema({
	id: { type: Object },
	name: { type: String },
	clothes: [{
		price: { type: Number },
		name: { type: String },
		size: { type: Array },
		color: { type: Array },
		description: { type: String },
		markDay: { type: Boolean },
		markNew: { type: Boolean },
		markHot: { type: Boolean },
		markSale: { type: Number },
		season: { type: String },
		type: { type: String },
		rate: { type: Number },
	}]
});

const Movie = mongoose.model('Movie', categorySchema);

module.exports = Movie;
