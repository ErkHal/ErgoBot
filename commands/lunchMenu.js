const menuFetcher = require('../utils/MenuFetcher.js');

module.exports = {
  buildMenu : () => {
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
}
