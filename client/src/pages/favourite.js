import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import RemoveBtn from "../components/RemoveBtn";
import FavouriteList from "../components/UserFavouriteList";
import API from "../utils/API";
import Border from "../components/Border";
 

// function Favourite (props) {
//     return(
// <Border >
//           <Row>
//           <p>User's Favourite List</p>
//           </Row>
//        </Border>
//     )
// }

class Favourite extends Component {
    state = {
        fooditems: []
    };


    componentDidMount() {
       API.getCurrentUser()
       .then(user =>{
            console.log(user.data)
            
                this.loadFavourites();
             
       })
    }

    loadFavourites = () => {
        API.getFavourites()
            .then(res =>
                this.setState({ fooditems: res.data })
            )
            .catch(err => console.log(err));
    };

    deleteFavourite = id => {
        API.deleteFavourite(id)
            .then(res => this.loadFavourites())
            .catch(err => console.log(err));
    };


    render() {

        return (
            <Border >
                <Row>
                    <h1>User's Favourite List</h1>
                    {this.state.fooditems.length ? (
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Category</th>
                                    <th>Shop</th>
                                    <th>Name</th>
                                    <th>Special Instructions</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.fooditems.map((fooditems, i) => (
                                    <tr>
                                        <td>{i+1}</td>
                                        <td>{fooditems.category}</td>
                                        <td>{fooditems.shop}</td>
                                        <td>{fooditems.name}</td>
                                        <td>{fooditems.specialInstructions}</td>
                                        <td><RemoveBtn id={fooditems._id} removebtn={this.deleteFavourite} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                    ) : (
                        <h1>No food items</h1>
                        )}
                </Row>
            </Border>
        )
        
    }; // render()
    
    
};// class Favourite extends Component


export default Favourite;

// <Table>
    
//     <thead>
// <tr>
// <th>#</th>
// <th>Category</th>
// <th>Shop</th>
// <th>Name</th>
// <th>Special Instructions</th>
// </tr>
// </thead>
// <tbody>
// <tr>
// <th scope="row">1</th>
// <th>Drink </th>
// <td>Coffee Cat</td>
// <td>Chai Tea latte</td>
// <td>Oat Milk</td>
// </tr>
// </tbody> 
//     </Table>
