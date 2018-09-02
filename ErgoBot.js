const Discord = require('discord.js');
const client = new Discord.Client();
const lunchMenu = require('./commands/lunchMenu');
const pizzaGenerator = require('./commands/pizzaGenerator');
const gifs = require('./commands/gifs');
const schedule = require('node-schedule')

const { TOKEN, PREFIX } = require('./config');

//This is a scheduled function to print out the cafeteria menu every Mo - Tue at 10:30am
const printToLunchChannel = () => {
  lunchMenu.buildMenu().then( menu => {
    client.channels.get("485714644980465674").send(menu)
  })
}

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
      message.shift();
       gifs.getGif(message.join(" "))
        .then(( gifJSON ) => {
          if(gifJSON.data.embed_url === undefined) {
            msg.channel.send('Iha paskoja hakusanoja sulla ku ei löydy mitää !');
          } else {
          msg.channel.send(gifJSON.data.embed_url);
        }
        }).catch((err) => {
          console.log(err);
          msg.channel.send('Nyt meni joku vituiks');
        });
      break;
    default:
  }
});

client.login(TOKEN);
schedule.scheduleJob('30 10 * 1-5,8-12 1-5', printToLunchChannel())