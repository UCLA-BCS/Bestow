import React from "react" 
import {Card,CardImg} from "reactstrap"

function UserCard (props) {

  return(

       <img src={props.pathimage} className="cardImage"/>
    //   <Card className="userCard" className="cardImage">
    //       <CardImg src={props.pathimage} />

    //   </Card>
  )
}
export default UserCard