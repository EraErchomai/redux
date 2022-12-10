import React, { Component } from "react";
import "../styles.css";
import { connect } from "react-redux";
import { delGoodToCart } from "../redux/actions/action";


class CartItem extends Component {
  render() {
    const { title, price, id } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        <button onClick={() => this.props.delGoodToCart(id)}>x</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  delGoodToCart: (id) => {
    dispatch(delGoodToCart(id))
  }
});
export default connect(null, mapDispatchToProps)(CartItem);