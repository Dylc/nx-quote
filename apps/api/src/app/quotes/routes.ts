var express = require('express');
var router = express.Router();
var quotes = require('./schema');
import { IQuote } from '@cargatser/data'

const quotesEx: IQuote[] = [
    { 
        author: "Sir Winston Churchill",
        createdAt: new Date("2020-09-06T15:15:33.416Z"),
        source: ["https://www.englishdom.com/skills/phrasebook/wordset/uinston-cherchill/"],
        tags: ["Difference", "Attitude"],
        text: {
            en: "Attitude is a little thing that makes a big difference.",
            ru: "Отношение — это мелочь, которая имеет большое значение."
        }
    }, 
    { 
        author: "Sir Winston Churchill",
        createdAt: new Date("2020-08-26T04:49:11.894Z"),
        source: ["https://www.keepinspiring.me/winston-churchill-quotes/"],
        text: {
            en: "No one can guarantee success in war, but only deserve it.",
            ru: "Отношение — это мелочь, которая имеет большое значение."
        }
    }
];


router.get( '/', function(req, res, next) {
    // users.userlist(function(err, users) {
    //   if (err) { return next(err); }

    //   res.send(users);
    // });
    res.send(quotesEx)
});

export default router ;