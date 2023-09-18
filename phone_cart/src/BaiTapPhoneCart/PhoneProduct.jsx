import React, { Component } from "react";

export default class PhoneProduct extends Component {
  render() {
    let { shoe, themSP } = this.props;
   
    return (
      <div className="card">
        <img src={shoe.image} className="card-img-top" alt={shoe.id} />
        <div className="card-body">
          <div>
            <h5 className="card-title">{shoe.name}</h5>
            <p className="card-text">{shoe.price} $</p>
            <button className="btn btn-primary" onClick={() => themSP(shoe)}>
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
