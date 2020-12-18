import Axios from "axios";
import React, { Component } from "react";

class FormAdd extends Component {
  state = {
    title: "",
    price: "",
    tags: "",
    quantity: "",
  };

  onFormInputHandler = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  componentDidUpdate(prevState, prevProps) {
    if (prevProps.productid !== this.props.productid) {
      Axios.get(
        "http://localhost:4000/productList/" + this.props.productid
      ).then((res) => {
        this.setState({
          title: res.data.title,
          price: res.data.price,
          tags: res.data.tags,
          quantity: res.data.quantity,
        });
      });
    }
  }
  onSubmitHandler = () => {
    // this.props.addProduct(this.state);
    const data = this.state;
    if (this.props.productid === "") {
      Axios.post("http://localhost:4000/productList", data).then((res) => {
        if (res.status === 201) {
          this.setState(
            { title: "", price: "", tags: "", quantity: "" },
            () => {
              this.props.getallData();
            }
          );
        }
      });
    } else {
      Axios.patch(
        "http://localhost:4000/productList/" + this.props.productid,
        data
      ).then((res) => {
        if (res.status === 201) {
          this.setState(
            { title: "", price: "", tags: "", quantity: "" },
            () => {
              this.props.getallData();
            }
          );
        }
      });
    }
  };
  render() {
    return (
      <div className="card shadow p-3">
        <div className="mb-3">
          <label for="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            onChange={this.onFormInputHandler}
          />
        </div>
        <div className="mb-3">
          <label for="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={this.state.price}
            onChange={this.onFormInputHandler}
          />
        </div>
        <div className="mb-3">
          <label for="Tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            value={this.state.tags}
            onChange={this.onFormInputHandler}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Quantity
          </label>
          <input
            type="text"
            className="form-control"
            id="quantity"
            value={this.state.quantity}
            onChange={this.onFormInputHandler}
          />
        </div>
        {this.props.actiontype !== "view" ? (
          <button className="btn btn-primary" onClick={this.onSubmitHandler}>
            Submit
          </button>
        ) : null}
      </div>
    );
  }
}

export default FormAdd;
