import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      currentProduct: 0,
      search: ''
    }
    this.getProducts = this.getProducts.bind(this);
    this.handleProductListClick = this.handleProductListClick.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  getProducts() {
    axios.get('/products')
    .then(({data}) => {
      this.setState({products: data});
    })
    .catch((err) => {
      console.error(err);
    })
  }

  handleSearchInput(e) {
    this.setState({search: e.target.value}, () => {
      this.handleSearchSubmit();
    })
  }

  handleSearchSubmit() {
    // Take search term and filter through list
    // Pass new index into productViewr
    // As searchterm continues to match product, render like-product
    let products = this.state.products;
    let searchTerm = this.state.search.toLowerCase();
    if (searchTerm.length > 0) {
      products.forEach((product, index) => {
        let item = product.item.toLowerCase();
        if (item.indexOf(searchTerm) > -1) {
          console.log('index', index)
          this.setState({currentProduct: index})
        }
      })
    } else {
      this.setState({currentProduct: 0})
    }

  }

  handleProductListClick(index) {
    this.setState({currentProduct: index})
  }

  componentDidMount() {
    this.getProducts();
  }

  render(){
    let products = this.state.products;
    let currentProduct = this.state.currentProduct;

    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search
              search={this.state.search}
              handleSearchInput={this.handleSearchInput}
              handleSearchSubmit={this.handleSearchSubmit}/>
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer
              product={products[currentProduct]}
              getProducts={this.getProducts}/>
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList
              products={products}
              handleProductListClick={this.handleProductListClick} />
          </div>
        </div>
      </div>
    )
  }
}