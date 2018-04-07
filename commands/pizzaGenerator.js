const pizza = require('../utils/pizzaToppings');

module.exports = {

  getPizza : (toppingsAmount) => {
    return new Promise(function(resolve, reject) {
      try {
        const intAmount = parseInt(toppingsAmount[1]);

        let randomizedToppings = [];

        if(intAmount <= (pizza.toppings.length) && intAmount > 0) {
          let count = 0;
          while (count < intAmount) {

            randTopping = pizza.toppings[Math.floor(Math.random() * pizza.toppings.length)];

            if(!randomizedToppings.includes(randTopping)) {
            randomizedToppings.push(randTopping);
            count++;
          }
        }

          resolve(randomizedToppings);
        } else {

          if(toppingsAmount[1] === 'help') {
            resolve(`Arvon haluamasi määrän pizzan täytteitä,
              mutta määrän pitää olla 1 - ${pizza.toppings.length} väliltä. `);
          }

          //TODO ADD FUNCTION TO ADD MORE TOPPINGS
          if(toppingsAmount[1] === 'lisää' && toppingsAmount.length >= 3) {
            resolve("Mussa ei vielä ole tätä toimintoa, kärsivällisyyttä plz");

          } else {
            reject(`Pizzan täytteiden määrä pitää olla väliltä 1 - ${pizza.toppings.length}`);
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
