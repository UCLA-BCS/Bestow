import React, { Component } from "react";
import { Row, Col, Table } from "reactstrap";
import RemoveBtn from "../components/RemoveBtn";
import InputBox from "../components/InputBox";
import { Form } from "semantic-ui-react";
import API from "../utils/API";
import Border from "../components/Border";
import ButtonUi from "../components/Button"
// import CategoryDropdown from "../components/UserFavouriteList";



class Favourite extends Component {
    state = {
        fooditems: []
    };


    componentDidMount() {
        API.getCurrentUser()
            .then(user => {
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

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        // alert("Clicked on Add");
        const newFavourite = {
            category: this.state.category,
            shop: this.state.shop,
            name: this.state.name,
            specialInstructions: this.state.specialInstructions

        };
        API.addFavourite(newFavourite)
            // .then(res => this.loadFavourites())
            .then(this.loadFavourites())
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
                    <Col md={6}>

                        <h1 className="favoriteH">Add Favourite to list</h1>

                        {/* <CategoryDropdown>
                            <Dropdown
                                value={this.state.category}
                                name="category"
                                handleInputChange={this.handleInputChange}
                            />
                        </CategoryDropdown> */}
                        <Form>
                            <InputBox
                                value={this.state.category}
                                name="category"
                                handleInputChange={this.handleInputChange}
                                // labelClassName="firstName"
                                inputClassName="addFavourite"
                                placeHolder="Category of favourite"
                            />
                            <InputBox
                                value={this.state.shop}
                                name="shop"
                                handleInputChange={this.handleInputChange}
                                // labelClassName="firstName"
                                inputClassName="addFavourite"
                                placeHolder="Shop of favourite"
                            />
                            <InputBox
                                value={this.state.name}
                                name="name"
                                handleInputChange={this.handleInputChange}
                                // labelClassName="firstName"
                                inputClassName="addFavourite"
                                placeHolder="Name of favourite"
                            />
                            <InputBox
                                value={this.state.specialInstructions}
                                name="specialInstructions"
                                handleInputChange={this.handleInputChange}
                                // labelClassName="firstName"
                                inputClassName="addFavourite"
                                placeHolder="Special Instructions?"
                            />
                            <ButtonUi color="black" text="Add" handleSubmit={this.handleSubmit} />
                        </Form>

                    </Col>
                    <Col md={4}>
                        <img src="/images/favorite.png" className="img-responsive"/>
                    </Col>
                </Row>

                <Col>
                    <Row>
                        <h1 className="favoriteH2" >User's Favourite List</h1>
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
                                            <td>{i + 1}</td>
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
                                <h4 className="noFood"><br />No Food Items<br /></h4>
                            )}
                    </Row>
                </Col>
            </Border>
        );

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
