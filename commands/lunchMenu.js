const dataFetcher = require('../utils/dataFetcher.js');

module.exports = {
  buildMenu : () => {
    return new Promise(function(resolve, reject) {

      //Get current date
      const today = new Date();

      const lunchURL =
       "https://www.sodexo.fi/ruokalistat/output/daily_json/16435/"
        + today.getFullYear() + "/" + (today.getMonth() + 1) + "/"
        + today.getDate() + "/fi"
        
      //Fetch lunch menu
      dataFetcher.fetchData(lunchURL)
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
}
