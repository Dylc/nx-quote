const express = require('express');
const router = express.Router();
const Quote = require('./schema');
import { IQuote } from '@cargatser/data'



router.get( '/', async function(req, res, next) {
    const result : Array<IQuote> = await Quote.find({}, {}, {
        // all options: https://mongoosejs.com/docs/api.html#query_Query-setOptions
        limit: 100
    }).exec();
    res.send(result)
});

router.post( '/add', async function(req, res, next) {
    console.log('Unimplemented')
    // const quote = new Quote({
    //     author: "Sir Winston Churchill",
    //     source: ["https://www.keepinspiring.me/winston-churchill-quotes/"],
    //     tags: ["Difference", "Attitude"],
    //     text: {
    //         en: "No one can guarantee success in war, but only deserve it.",
    //     }
    // })
    
    // // TODO can I omit try catch in new 5 express?
    // let result = await quote.save();
    // res.send(result)
});

export default router ;