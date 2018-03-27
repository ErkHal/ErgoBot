let pizzaUtils = require('../utils/pizzaUtils');

module.exports = {

  getPizza : (toppingsAmount) => {
    return new Promise(function(resolve, reject) {
      try {
        const intAmount = parseInt(toppingsAmount[1]);

        let pizzaToppings = [];

        if(intAmount <= 30 && intAmount > 0) {
          for(let i = 0; i < intAmount; i++) {
            pizzaToppings.push(pizzaUtils.toppings[Math.floor(Math.random() * 10)]);
          }

          resolve(pizzaToppings);
        } else {

          if(toppingsAmount[1] === 'help') {
            resolve(`Arvon haluamasi määrän pizzan täytteitä,
              mutta määrän pitää olla 1 - 30 väliltä.
              Jos haluat lisätä lisää erilaisia täytteitä, kirjoita käskyn perään
              lisää ja sitten täytteen nimi.`);
          }

          if(toppingsAmount[1] === 'lisää' && toppingsAmount.length >= 3) {
            //pizzaUtils.addTopping(toppingsAmount[2]);
            resolve("Ei oo viel lisätty tää toiminto");

          } else {
            reject('Mene töihin tai kirjota help komennon perään');
          }
        }

      } catch(err) {
        console.log(err);
        console.log(toppingsAmount[1]);
        reject('Mitä vittua sä nyt taas menit tekemään');
      }
    });
  }
}
