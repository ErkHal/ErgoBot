const dataFetcher = require('../utils/dataFetcher.js');

const cleanMenuData = (menuData) => {

}

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

          if(result.courses.length <= 1) {
            resolve('Eipä löytyny menua tälle päivälle, väännä ite safkas');
          }

            let menu = `
              \:stew: Tänään tarjolla @ ${result.meta.ref_title}  \:salad:
              `
            result.courses.forEach( course => {

              if(!course.title_en) {
                course.title_en = "";
              }
              if(!course.title_fi) {
                course.title_fi = "";
              }

              menu +=
              `
              ${course.title_fi}
              ${course.title_en}
              ( ${course.price.split('/')[0]})
              --------------------------------
              `
            })
            resolve(menu);
          }).catch((err) => {
             console.log('Oops. Error while processing the lunch menu')
             console.log(err);
              reject(err);
         });
    });
  }
}
