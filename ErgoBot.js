const Discord = require('discord.js');
const client = new Discord.Client();
const lunchMenu = require('./commands/lunchMenu');
const pizzaGenerator = require('./commands/pizzaGenerator');

const { TOKEN, PREFIX } = require('./config');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  // Get lunch menu for the cafeteria
  if (msg.content === (PREFIX + 'safkaa')) {
      lunchMenu.buildMenu().then(( foodz ) => {
        msg.channel.send(foodz);
      })
    }

  // ( ͡° ͜ʖ ͡°)
  if (msg.content === (PREFIX + 'marco')) {
    msg.reply('Polo');
  }

  // Return pizza toppings for the user
  if(msg.content.split(" ")[0] === (PREFIX + 'pizza')) {
    pizzaGenerator.getPizza(msg.content.split(" "))
      .then(( result ) => {
        msg.reply(result);
    }).catch((err) => { msg.reply(err) });
  }
});

client.login(TOKEN);

//------------ BOT FUNCTIONS ---------------

//Builds the menu from fetched data
