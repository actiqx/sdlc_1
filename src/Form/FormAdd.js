import React, { Component } from "react";

class FormAdd extends Component {
  state = {
    title: "",
    price: "",
    Tags: "",
    Quantity: "",
  };

  onFormInputHandler = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onSubmitHandler = () => {
    this.props.addProduct(this.state);
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
            id="Tags"
            value={this.state.Tags}
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
            id="Quantity"
            value={this.state.Quantity}
            onChange={this.onFormInputHandler}
          />
        </div>
        <button className="btn btn-primary" onClick={this.onSubmitHandler}>
          Submit
        </button>
      </div>
    );
  }
}

export default FormAdd;
