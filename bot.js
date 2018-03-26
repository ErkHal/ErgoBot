const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const menuFetcher = require('./MenuFetcher.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!safkaa') {
    menuFetcher.getTodaysMenu()
      .then(( result ) => {

        let menu = `
          \:stew: Tänään tarjolla @ Sodexo Vanha Maantie 6  \:salad:
          `
        result.courses.forEach( course => {
          menu +=
          `
          ${course.title_fi}
          (${course.price.split('/')[0]})
          --------------------------------
          `
        })

        msg.channel.send(menu);
      });
  }
});

client.login(auth.token);
