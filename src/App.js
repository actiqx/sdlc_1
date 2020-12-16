import React, { Component } from "react";
import FormAdd from "./Form/FormAdd";
import FormList from "./Form/FormList";

class App extends Component {
  state = {
    productList: [],
  };

  addProduct = (data) => {
    const pList = this.state.productList;
    this.setState({ productList: pList.concat(data) });
  };
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 col-sm-12">
            {" "}
            <FormAdd addProduct={this.addProduct} />
          </div>
          <div className="col-md-8 col-sm-12">
            <FormList productList={this.state.productList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
