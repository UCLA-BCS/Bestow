import React from "react";
import { Dropdown } from 'semantic-ui-react'
// import { Container, Row, Col } from "reactstrap";

// function FriendsProfile (props) {
//     return(
//         import React from 'react'

const friendOptions = [
  {
    key: 'Juliana Hernandez',
    text: 'Juliana Hernandez',
    value: 'Juliana Hernandez',
    image: { avatar: true, src: '../images/avatar.png' },
  },
  {
    key: 'Mark Fullton',
    text: 'Mark Fullton',
    value: 'Mark Fullton',
    image: { avatar: true, src: './images/avatar.png' },
  },
  {
    key: 'Hazel Kasusky',
    text: 'Hazel Kasusky',
    value: 'Hazel Kasusky',
    image: { avatar: true, src: './images/avatar.png' },
  },
  {
    key: 'Micheal Solo',
    text: 'Micheal Solo',
    value: 'Micheal Solo',
    image: { avatar: true, src: './images/avatar.png' },
  },
  {
    key: 'Michael Pope',
    text: 'Michael Pope',
    value: 'Michael Pope',
    image: { avatar: true, src: './images/avatar.png' },
  },
  {
    key: 'Phil Loy',
    text: 'Phil Loy',
    value: 'Phil Loy',
    image: { avatar: true, src: './images/avatar.png' },
  },
]

const friendSelection = () => (
  <Dropdown
    placeholder='Select Friend'
    fluid
    selection
    options={friendOptions}
  />
);

export default friendSelection
