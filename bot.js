const Discord = require('discord.js');
const client = new Discord.Client();
const menuFetcher = require('./MenuFetcher.js');

const { TOKEN, PREFIX } = require('./config');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === (PREFIX + 'safkaa')) {
      buildMenu().then(( foodz ) => {
        msg.channel.send(foodz);
      })
    }
  if (msg.content === (PREFIX + 'marco')) {
    msg.reply('Polo');
  }
});

client.login(TOKEN);

//------------ BOT FUNCTIONS ---------------

//Builds the menu from fetched data
function buildMenu() {
  return new Promise(function(resolve, reject) {
    menuFetcher.getTodaysMenu()
      .then(( result ) => {
          let menu = `
            \:stew: Tänään tarjolla @ ${result.meta.ref_title}  \:salad:
            `
          result.courses.forEach( course => {
            menu +=
            `
            ${course.title_fi}
            (${course.price.split('/')[0]})
            --------------------------------
            `
          })
          resolve(menu);
        }).catch((err) => {
           console.log('Oops. Error while processing the lunch menu')
            reject('OoPsiE WoOpSiE, i MaDe a fucKy WucKy !')
       });
  });
}
