import React from "react";

const FormList = (props) => {
  const { productList } = props;
  return (
    <div className="card shadow p-3">
      <table className="table">
        <thead>
          <th>Title</th>
          <th>Price</th>
          <th>Tags</th>
          <th>Quantity</th>
        </thead>
        <tbody>
          {productList.map((product) => {
            return (
              <tr>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.Tags}</td>
                <td>{product.Quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FormList;
