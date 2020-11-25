const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = Schema({
    author: { 
        type: String, 
        required: true 
    },
    context: String,
    source: [String], 
    tags: [String],
    text: Schema.Types.Mixed,
},{ timestamps: true });

module.exports = mongoose.model( 'Quote', QuoteSchema, 'quotes' );