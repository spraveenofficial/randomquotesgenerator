const {Telegraf} = require('telegraf')
const {fetchAttitude} = require('./api.js')
const bot = new Telegraf('1379902535:AAEK9IMX6u6wRYUhpCD-x_b-S0sCInvc7SU')

bot.start((ctx) => ctx.reply("Welcome to Bot! you will get Random Quotes Here. \nGet Attitude Quotes: /attitude \nGet Art Quotes: /art \nGet Boys Quotes: /boys \nGet Travel Quotes: /travel \nGet Vehicle Quotes: /vehicle \nGet Beauty Quotes Here: /beauty \nGet Books Quotes Here: /books \nGet Birthday Quotes Here: /birthday \nGet Abstract Quotes: /abstract \nGet Startup Quotes Here: /startup \nGet College Quotes Here: /college \nGet Selfie Quotes Here: /selfie \nGet Seasons Quotes Here: /seasons \nGet Family Quotes Here: /family \nWe are working for adding more categories. Stay Tuned! "))
bot.command('attitude', (ctx) => ctx.reply(attitudeQuotedData[Math.floor(Math.random() * attitudeQuotedData.length)].caption))
bot.command('art', (ctx) => ctx.reply(artQuotedData[Math.floor(Math.random() * artQuotedData.length)].caption))
bot.command('boys', (ctx) => ctx.reply(boysQuotedData[Math.floor(Math.random() * boysQuotedData.length)].caption))
bot.command('travel', (ctx) => ctx.reply(travelQuotedData[Math.floor(Math.random() * travelQuotedData.length)].caption))
bot.command('vehicle', (ctx) => ctx.reply(vehicleQuotedData[Math.floor(Math.random() * vehicleQuotedData.length)].caption))
bot.command('beauty', (ctx) => ctx.reply(beautyQuotedData[Math.floor(Math.random() * beautyQuotedData.length)].caption))
bot.command('books', (ctx) => ctx.reply(booksQuotedData[Math.floor(Math.random() * booksQuotedData.length)].caption))
bot.command('birthday', (ctx) => ctx.reply(birthdayQuotedData[Math.floor(Math.random() * birthdayQuotedData.length)].caption))
bot.command('abstract', (ctx) => ctx.reply(abstractQuotedData[Math.floor(Math.random() * abstractQuotedData.length)].caption))
bot.command('startup', (ctx) => ctx.reply(startupQuotedData[Math.floor(Math.random() * startupQuotedData.length)].caption))
bot.command('college', (ctx) => ctx.reply(collegeQuotedData[Math.floor(Math.random() * collegeQuotedData.length)].caption))
bot.command('selfie', (ctx) => ctx.reply(selfieQuotedData[Math.floor(Math.random() * selfieQuotedData.length)].caption))
bot.command('seasons', (ctx) => ctx.reply(seasonsQuotedData[Math.floor(Math.random() * seasonsQuotedData.length)].caption))
bot.command('family', (ctx) => ctx.reply(familyQuotedData[Math.floor(Math.random() * familyQuotedData.length)].caption))
bot.command('help', (ctx) => ctx.reply("For Any Kind of help ❤️ \nPlease Contact Owner: @spraveenofficial"))
bot.launch()