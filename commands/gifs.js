const dataFetcher = require('../utils/dataFetcher');
const { GIPHY_KEY } = require('../config.json');
const giphyURL = "https://api.giphy.com/v1/gifs/random?api_key=" + GIPHY_KEY;

module.exports = {

  getGif : (searchword = "") => {
    return new Promise((resolve, reject) => {
      let url = giphyURL + "&tag=" + searchword + "&rating=R";
      dataFetcher.fetchData(url)
        .then((gifJSON) => {
          resolve(gifJSON);
        }).catch((err) => {
          console.log(err);
          reject('Something went wrong');
        });
    });
  }
}
