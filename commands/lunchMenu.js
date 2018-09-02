const dataFetcher = require('../utils/dataFetcher.js');
const RateLimiter = require('limiter').RateLimiter;
const limiter = new RateLimiter(2, 'minute', true);

module.exports = {
  buildMenu : () => {
    return new Promise(function(resolve, reject) {

      limiter.removeTokens(1, (err, remainingRequests) => {
        if(remainingRequests < 1) {
          
          resolve("Voit kutsua tätä komentoa vain kerran minuutissa");
        
        } else {
            
          //Get current date
          const today = new Date();

          const lunchURL =
          "https://www.sodexo.fi/ruokalistat/output/daily_json/16435/"
            + today.getFullYear() + "/" + (today.getMonth() + 1) + "/"
            + today.getDate() + "/fi"

          //Fetch lunch menu
          dataFetcher.fetchData(lunchURL)
            .then(( result ) => {

              if(result.courses.length <= 1) {
                resolve('Eipä löytyny menua tälle päivälle, väännä ite safkas');
              }

                let menu = `
                  \:stew: Tänään tarjolla @ ${validate(result.meta.ref_title)}  \:salad:
                  `
                result.courses.forEach( course => {

                  menu +=
                  `
                  ${validate(course.title_fi)}
                  ${validate(course.title_en)}
                  ${validate(course.price)}
                  --------------------------------
                  `
                })
            resolve(menu);
          }).catch((err) => {
             console.log('Oops. Error while processing the lunch menu')
             console.log(err);
              reject(err);
         });
        }
      });
    });
  }
}

/*

 (╯°□°）╯︵ ┻━┻

This fucking function has to exist just because people at a certain company
cant output reliable data, that is sometimes even missing something very fucking
relevant, such as the PRICE of the food.

*/
function validate(jsonEntry) {

  console.log(jsonEntry);
  if(jsonEntry == undefined) {
    return ""
  } else {
    return jsonEntry
  }
}
