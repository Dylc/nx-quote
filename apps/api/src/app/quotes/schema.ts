const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = Schema({
    author: { 
        type: String, 
        required: true 
    },
    text: {
        type: Schema.Types.Mixed,
        required: true
    },
    context: String,
    source: [String], 
    tags: [String],
},{ timestamps: true });

module.exports = mongoose.model( 'Quote', QuoteSchema, 'quotes' );