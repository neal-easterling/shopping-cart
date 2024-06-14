// simulate getting products from DataBase

const moreProducts = [
  { name: "Carrots", country: "Italy", cost: 3, instock: 10 },
  { name: "Blood Oranges", country: "Spain", cost: 4, instock: 3 },
  { name: "Strawberries", country: "USA", cost: 2, instock: 5 },
  { name: "Beets", country: "USA", cost: 1, instock: 8 },
];

export default function getProducts(){
  return Promise.resolve(moreProducts);
}

