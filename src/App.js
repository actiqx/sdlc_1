import Axios from "axios";
import React, { Component } from "react";
import FormAdd from "./Form/FormAdd";
import FormList from "./Form/FormList";
class App extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      productid: "",
      actiontype: "",
    };
    // this.addProduct = this.addProduct.bind(this);
  }
  // state = {
  //   productList: [],
  // };
  // Es5
  // addProduct = function (data) {
  //ES6
  // addProduct = function (data) {
  //   const pList = this.state.productList;
  //   this.setState({ productList: pList.concat(data) });
  // };
  getallData = () => {
    Axios.get("http://localhost:4000/productList").then((res) => {
      console.log("res", res);
      this.setState({ productList: res.data });
    });
  };
  setProductID = (id, type) => {
    this.setState({ productid: id, actiontype: type });
  };
  componentDidMount() {
    this.getallData();
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            {" "}
            <FormAdd
              getallData={this.getallData}
              productid={this.state.productid}
              actiontype={this.state.actiontype}
            />
          </div>
          <div className="col-md-8 col-sm-12">
            <FormList
              productList={this.state.productList}
              setProductID={this.setProductID}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
