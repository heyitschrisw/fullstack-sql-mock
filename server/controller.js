// Controller here
// complete building out the controller
const db = require('../db/dbhelpers');

const controller = {
  get: (req, res) => {
    db.getProductsHelper((err, results) => {
      // results from db SELECT query
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).json(results);
      }
    })
  },

  post: (req, res) => {
    // Param product requires req.body props
    let product = req.body;
    db.postProductsHelper(product, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results)
      }
    })
  },

  put: (req, res) => {
    // Params required include id from URL and bid
    let id = req.params._id;
    let bid = req.body.curr_bid;
    db.updateProductHelper(id, bid, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results)
      }
    })
  },

  delete: (req, res) => {
    // Params required include id from URL
    let id = req.params._id;
    db.deleteProductHelper(id, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results)
      }
    })
  }
}

module.exports = controller