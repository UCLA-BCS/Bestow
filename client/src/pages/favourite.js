import React, {Component} from  "react";
import { Container, Row, Col, Table } from "reactstrap";
import RemoveFoodBtn from "../components/RemoveFoodBtn";
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
        category: "",
        shop: "",
        name: "",
        specialinstr: "",
    }


    componentDidMount() {
        this.loadFavourites();
    }

    loadFavourites = () => {
    API.getFavourites()
        .then(res =>
        this.setState({ category: "", shop: "", name: "", specialinstr: "" })
        )
        .catch(err => console.log(err));
    };

    deleteFavourite = id => {
        API.deleteFavourite(id)
          .then(res => this.loadFavourites())
          .catch(err => console.log(err));
      };
    
    render() {

        return(
            <Border >
                <Row>
                <p>User's Favourite List</p>
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

                </Row>
            </Border>
      )

    }; // render()


};// class Favourite extends Component

    
export default Favourite;