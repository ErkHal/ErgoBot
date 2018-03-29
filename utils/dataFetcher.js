const fetch = require('node-fetch');
module.exports = {
  /*
   Fetches JSON data from a given url.
   Just a wrapper function for node-fetch library's fetch function
  */
  fetchData : (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(( response ) => {
          return response.json();
        })
        .then(( json ) => {
          resolve(json);
        }).catch((err) => {
          console.log(err);
          reject(err)
        });
    });
  }
}
