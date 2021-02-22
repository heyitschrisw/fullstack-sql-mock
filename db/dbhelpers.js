// complete and fix the dbhelpers
const db = require('./index.js');

module.exports = {

  getProductsHelper: (callback) => {
    // GET products from DB up to 10
    let query = `SELECT * FROM products LIMIT 10`;
    db.query(query, (err, results) => {
      callback(err, results);
    })
  },

  postProductsHelper: (product, callback) => {
    // POST new product to DB
    let query = `INSERT INTO products (item, min_cost, curr_bid, ends_in, image) VALUES ('${product.item}', ${product.min_cost}, ${product.curr_bid}, ${product.ends_in}, '${product.image}')`;
    db.query(query, (err, results) => {
      callback(err, results);
    })
  },

  updateProductHelper: (id, bid, callback) => {
    // Update current product bid
    let query = `UPDATE products SET curr_bid = ${bid} WHERE id = ${id}`;
    db.query(query, (err, results) => {
      callback(err, results);
    })
  },

  deleteProductHelper: (id, callback) => {
    // Deletes product from DB
    let query = `DELETE FROM products WHERE id = ${id}`;
    db.query(query, (err, results) => {
      callback(err, results);
    })
  }

}