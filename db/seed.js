
// const Products = require('./models.js');
const db = require('./index.js');

// Fill in the definition of insertMockData so that when
// this file is run in the terminal with `node seed.js`,
// all 10 products are inserted into the database

const adjectives = ['Used', 'New', 'Refurbished', "PARTS ONLY"];
const brand = ['Sonny', 'Ninetendo', 'Microhard', 'Azeus', 'Sansong', 'Apull', 'Wowhey', 'Illogitech'];
const noun = ['Smartphone', 'Monitor', 'Headphones', 'Earbuds', 'Trashcan', 'Laptop', 'Gaming System', 'TV', 'Personal Air Conditioning Unit', 'Gaming Mouse', 'Tablet', 'Flip Phone', 'Pager'];

const createProduct = () => {
  let product = {};
  product.item = `${adjectives[Math.floor(Math.random() * Math.floor(adjectives.length))]} ${brand[Math.floor(Math.random(brand.length) * Math.floor(4))]} ${noun[Math.floor(Math.random() * Math.floor(noun.length))]}`;
  product.min_cost = parseFloat(Math.ceil(Math.random() * Math.ceil(1000)));
  product.curr_bid = parseFloat(Math.ceil(Math.random() * Math.ceil(10000)));
  product.ends_in = Math.ceil(Math.random() * Math.ceil(3));
  // the lorempixel images render very slowly for some reason.
  // don't worry too much if some images load while the others don't.
  // it's probably not your fault
  product.image = `http://lorempixel.com/400/400/technics/${Math.ceil(Math.random() * Math.ceil(10))}`;
  return product
};

const createProducts = () => {
  let productsArr = [];
  for(let i = 0; i < 10; i++){
    productsArr.push(createProduct())
  }
  return productsArr
}

const insertMockData = function() {
  // Run createProducts to populate an array of products
  // For each item in array, invoke db.query to insert each product
  let productsArr = createProducts();
  productsArr.forEach(product => {
    db.query(`INSERT INTO products (item, min_cost, curr_bid, ends_in, image) VALUES ('${product.item}', ${product.min_cost}, ${product.curr_bid}, ${product.ends_in}, '${product.image}')`)
  })
};

insertMockData();

db.end(() => {
  console.log('Connection ended.')
})

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
