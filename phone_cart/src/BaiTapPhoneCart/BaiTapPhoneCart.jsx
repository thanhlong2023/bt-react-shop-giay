import React, { Component } from "react";
import PhoneList from "./PhoneList";
import GioHang from "./GioHang";

export default class BaiTapPhoneCart extends Component {
  state = {
    productCart: [],
  };
  themSP = (sp) => {
    let spGioHang = {
      maSP: sp.id,
      name: sp.name,

      quantity: 1,
      price: sp.price,
      image: sp.image,
    };
    //tìm sản phẩm đã có trong giỏ hàng hay chưa
    let index = this.state.productCart.findIndex(
      (spGH) => spGH.maSP === spGioHang.maSP
    );
    if (index !== -1) {
      this.state.productCart[index].quantity += 1;
    } else {
      this.state.productCart.push(spGioHang);
    }
    //push vào state.gioHang
    // let gioHangCapNhat = [...this.state.productCart, spGioHang];
    this.setState({ productCart: this.state.productCart });
  };
  xoaSP = (id) => {
    let index = this.state.productCart.findIndex((spGH) => spGH.maSP === id);
    if (index !== -1) {
      this.state.productCart.splice(index, 1);
    }
    this.setState({
      productCart: this.state.productCart,
    });
  };
  tangGiamSL = (number, id) => {
    // console.log(id);
    let gioHang = [...this.state.productCart];
    // console.log(gioHang);
    let index = gioHang.findIndex((spGH) => {
      //   console.log(spGH.maSP);
      return spGH.maSP === id;
    });
    if (index !== -1) {
      if (gioHang[index].quantity <= 1 && number === -1) {
        return;
      }
      gioHang[index].quantity += number;
    }
    this.setState({
      productCart: gioHang,
    });
  };
  tongSL = () => {
    // let soLuong = 0;
    // for (let i = 0; i < this.state.productCart.length; i++) {
    //   let spGioHang = this.state.productCart[i];

    //   soLuong += spGioHang.quantity;
    // }
    // return soLuong;
  
    return this.state.productCart.reduce((tongSL, spGioHang, index) => {
      return (tongSL += spGioHang.quantity);
    }, 0);
  };
  render() {
    return (
      <div>
        <h1 className="text-center">Bài tập giỏ hàng Props</h1>
        <h6
          style={{ cursor: "pointer" }}
          className="text-right mr-5"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i class="fa fa-shopping-cart"></i> Giỏ hàng ({this.tongSL()})
        </h6>
        <PhoneList themSP={this.themSP} />
        <GioHang
          gioHang={this.state.productCart}
          xoaSP={this.xoaSP}
          tangGiamSL={this.tangGiamSL}
        />
      </div>
    );
  }
}
