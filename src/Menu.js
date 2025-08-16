import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const Menu=()=>{
    return(<>
    <ListGroup  style={{color:"red"}} >
        <Link className="list-group-item list-group-itme-action" tag="a" to="/" action>Home</Link>
    
        <Link className="list-group-item list-group-itme-action" tag="a" to="/add" action>Add Contact </Link>
    
        <Link className="list-group-item list-group-itme-action" tag="a" to="/view" action>View Contact </Link>
        <Link className="list-group-item list-group-itme-action" tag="a" to="/hi" action>View Contact </Link>
    </ListGroup> 


    </>);
}
export default Menu;
