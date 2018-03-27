module.exports = {
  toppings : [
    "Kinkku", "Salami", "Herkkusieni", "BBQ-Kastike", "Katkarapu", "Oliivi",
    "Pekoni", "Kebab", "Kana", "Aurajuusto", "Mozzarella", "Vuohenjuusto",
    "Tuplajuusto"
  ], /*
  addTopping : (topping) => {
    this.toppings.push(topping);
  }, */
  getToppings: () => {
    return this.toppings;
  }
}
