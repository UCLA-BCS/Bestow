// adding food list
// possibility of creating classes for user, foodlist, etc for an easier translation between the database into the table
import React from "react";
import { Table } from "reactstrap";
import "./style.css";

const FoodList = (props) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Category</th>
          <th>Shop</th>
          <th>Name</th>
          <th>Special Instructions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <th>#</th>
          <td>Drink</td>
          <td>Coffee Cat</td>
          <td>Chai Tea latte</td>
          <td>Oat Milk</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default FoodList;