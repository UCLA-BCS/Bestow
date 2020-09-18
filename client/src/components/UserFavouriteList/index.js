import React from 'react';
import { Dropdown } from 'semantic-ui-react';
// import "semantic-ui-css/semantic.min.css";



const CategoryDropdown = (props) => {
    // debugger;
    return (
  <Dropdown
    placeholder='Select Favourite Category'
    fluid
    selection
    options={props.options}
    onChange={props.handleInputChange}
    name={props.name}
    value={props.value}
  />
)}

CategoryDropdown.defaultProps = {
    options :[
        { text: "Drink", value: "drink" },
        { text: "Entree", value: "entree" },
        { text: "Snack", value: "snack" },
        { text: "Dessert", value: "dessert" },
        { text: "Appetizer", value: "appetizer" }
      ]
}

export default CategoryDropdown
