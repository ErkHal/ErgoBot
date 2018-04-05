const Discord = require('discord.js');
const client = new Discord.Client();
const lunchMenu = require('./commands/lunchMenu');
const pizzaGenerator = require('./commands/pizzaGenerator');
const gifs = require('./commands/gifs');

const { TOKEN, PREFIX } = require('./config');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  const message = msg.content.split(" ");

  switch (message[0]) {

    // Get lunch menu for the cafeteria
    case PREFIX + 'safkaa':
      lunchMenu.buildMenu().then(( foodz ) => {
        msg.channel.send(foodz);
      }).catch((err) => {
        msg.reply(`
          Ethän sä nyt voi olettaa että mä iha joka kerta toimisin, ethän ?`);
      });

      break;

    // ( ͡° ͜ʖ ͡°)
    case PREFIX + 'marco':
      msg.reply('Polo');
      break;

    //Gets randomized pizza toppings
    case PREFIX + 'pizza':
      pizzaGenerator.getPizza(msg.content.split(" "))
        .then(( result ) => {
          msg.reply(result);
      }).catch((err) => { msg.reply(err) });
      break;

    //Gets a random GIF either with optional searchword
    case PREFIX + 'gif':
       gifs.getGif(message[1])
        .then(( gifJSON ) => {
          msg.channel.send(gifJSON.data.embed_url);
        }).catch((err) => {
          console.log(err);
          msg.channel.send('Nyt meni joku vituiks');
        });
      break;
    default:

  }
});

client.login(TOKEN);
