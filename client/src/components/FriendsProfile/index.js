import React from "react";

// import { Dropdown } from 'semantic-ui-react'
// import { Container, Row, Col } from "reactstrap";

// function FriendsProfile (props) {
//     return(
//         import React from 'react'

const friendOptions = [
  {
    key: 'Juliana Hernandez',
    text: 'Juliana Hernandez',
    value: 'Juliana Hernandez',
    image: '../images/friend.svg'
  },
  {
    key: 'Mark Fullton',
    text: 'Mark Fullton',
    value: 'Mark Fullton',
    image: './images/friend.svg'
  },
  {
    key: 'Hazel Kasusky',
    text: 'Hazel Kasusky',
    value: 'Hazel Kasusky',
    image:'./images/friend.svg'
  },
  {
    key: 'Micheal Solo',
    text: 'Micheal Solo',
    value: 'Micheal Solo',
    image: './images/avatar.png'
  },
  {
    key: 'Michael Pope',
    text: 'Michael Pope',
    value: 'Michael Pope',
    image: './images/friend.svg'
  },
  {
    key: 'Phil Loy',
    text: 'Phil Loy',
    value: 'Phil Loy',
    image:'./images/friend.svg'
  },
]

const FriendSelection = () => {
const [friend, setFriend] = React.useState("")

const handleFriendOnChange = event => setFriend(event.target.value); 

  return (
  // <Dropdown
  //   placeholder='Select Friend'
  //   fluid
  //   selection
  //   options={friendOptions}
  // />
  <select value={friend} onChange={handleFriendOnChange}>
    {friendOptions.map(({key,text,value,image}) => <option value={value}>{value}</option>)}
  {/* <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option value="coconut">Coconut</option>
  <option value="mango">Mango</option> */}
</select>

)};

export default FriendSelection
