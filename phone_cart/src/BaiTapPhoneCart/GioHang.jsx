import React, { Component } from "react";

export default class GioHang extends Component {
  tinhTongTien = () => {
    let { gioHang } = this.props;
    return gioHang
      .reduce((tongTien, spGioHang, index) => {
        return (tongTien += spGioHang.quantity * spGioHang.price);
      }, 0)
      .toLocaleString();
  };
  render() {
    let { gioHang, xoaSP, tangGiamSL } = this.props;

    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Shoes Cart
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table
                  border={1}
                  style={{ width: "100%", textAlign: "center" }}
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {gioHang.map((giay, index) => {
                      return (
                        <tr key={index}>
                          <td>{giay.name}</td>
                          <td>
                            <img
                              src={giay.image}
                              alt=""
                              style={{ width: "150px" }}
                            />
                          </td>
                          <td>
                            <button
                              className="btn btn-primary"
                              onClick={() => tangGiamSL(-1, giay.maSP)}
                            >
                              -
                            </button>
                            {giay.quantity}
                            <button
                              className="btn btn-primary"
                              onClick={() => tangGiamSL(1, giay.maSP)}
                            >
                              +
                            </button>
                          </td>
                          <td>{giay.price}</td>
                          <td>
                            {(giay.quantity * giay.price).toLocaleString()}
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => xoaSP(giay.maSP)}
                            >
                              Xóa
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={3}></td>
                      <td>Tổng tiền</td>
                      <td>{this.tinhTongTien()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
