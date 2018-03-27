const fetch = require('node-fetch');

module.exports = {

  getTodaysMenu : () => {
    return new Promise(function(resolve, reject) {

      const today = new Date();

      fetch("https://www.sodexo.fi/ruokalistat/output/daily_json/16435/"
            + today.getFullYear() + "/" + (today.getMonth() + 1) + "/"
            + today.getDate() + "/fi")
      .then((menu) => {
        return menu.json();
      })
      .then((menu) => {
        resolve(menu);
      })
      .catch((err) => { console.log(err) });
    });
  }
}
