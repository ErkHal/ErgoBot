let pizza = require('../utils/pizza');

module.exports = {

  getPizza : (toppingsAmount) => {
    return new Promise(function(resolve, reject) {
      try {
        const intAmount = parseInt(toppingsAmount[1]);

        let pizzaToppings = [];

        if(intAmount <= 30 && intAmount > 0) {
          for(let i = 0; i < intAmount; i++) {
            pizzaToppings.push(pizza.toppings[Math.floor(Math.random() * 10)]);
          }

          resolve(pizzaToppings);
        } else {

          if(toppingsAmount[1] === 'help') {
            resolve(`Arvon haluamasi määrän pizzan täytteitä,
              mutta määrän pitää olla 1 - 30 väliltä.
              Jos haluat lisätä lisää erilaisia täytteitä, kirjoita käskyn perään
              lisää ja sitten täytteen nimi.`);
          }
          //Add more toppings
          if(toppingsAmount[1] === 'lisää' && toppingsAmount.length >= 3) {
            fs.readFile('../utils/pizza.json', 'utf8', function readFileCallback(err, data){
              if (err){
                  console.log(err);
                  reject("Eipä onnistunu");
              } else {
              obj = JSON.parse(data); //now its an object
              obj.toppings.push(toppingsAmount[2]); //add some data
              json = JSON.stringify(obj); //convert it back to json
              fs.writeFile('pizza.json', json, 'utf8', callback); // write it back
              resolve("Täyte lisätty'd")
            }});
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
