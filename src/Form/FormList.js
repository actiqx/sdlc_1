import React from "react";
import { GrEdit, GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
const FormList = (props) => {
  const { productList } = props;
  return (
    <div className="card shadow p-3">
      <table className="table">
        <thead>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Tags</th>
          <th>Quantity</th>
          <th>Action</th>
        </thead>
        <tbody>
          {productList.map((product) => {
            return (
              <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.tags}</td>
                <td>{product.quantity}</td>
                <td>
                  <GrView
                    className="mr-2"
                    onClick={() => props.setProductID(product.id, "view")}
                  />
                  <GrEdit
                    className="mr-2"
                    onClick={() => props.setProductID(product.id, "edit")}
                  />
                  <MdDelete className="mr-2" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FormList;
