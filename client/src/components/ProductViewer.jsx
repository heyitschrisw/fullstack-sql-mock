import React from 'react';
import axios from 'axios';

// Image / Title / Current Bid / Original Price / Bidding Ends In
// New Bid: ____ Submit Form => UPDATE db with new bid
// If bid is below current bid, refuse UPDATE

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      bidValue: ''
    }
    this.handleBidValue = this.handleBidValue.bind(this);
    this.handleBidSubmit = this.handleBidSubmit.bind(this);
  }

  handleBidValue(e) {
    this.setState({
      bidValue: e.target.value
    })
  }

  handleBidSubmit(e) {
    e.preventDefault();
    let curr_bid = this.props.product.curr_bid;
    let bidValue = this.state.bidValue;
    if (bidValue < curr_bid) {
      alert(`Bid is too low. Must bid higher than $${curr_bid}`);
    } else {
      axios.put(`/products/${this.props.product.id}`, {
        _id: this.props.product.id,
        curr_bid: this.state.bidValue
      })
      .then(() => {
        this.props.getProducts();
        alert(`Bid of $${bidValue} was successful`);
        this.setState({bidValue: ''});
      })
    }
  }

  render() {
    if (this.props.product) {
      return (
        <div className = 'product-viewer'>
          <img src={this.props.product.image} /> <br></br>
          <b>{this.props.product.item}</b><br></br>
          <b>Current Bid: ${this.props.product.curr_bid}</b><br></br>
          <b>Posting Price: ${this.props.product.min_cost}</b><br></br>
          <b>Bidding Ends in: {this.props.product.ends_in} {`day(s)`}</b>
          <form onSubmit={this.handleBidSubmit}>
            New Bid: &nbsp;
            <input type='text' value={this.state.bidValue} onChange={this.handleBidValue}/>
            <input type='submit' value="Submit" />
          </form>
        </div>
      )
    } else {
      return (
        <div>
          No current product available.
        </div>
      )
    }
  }
}