import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

const MyOptions = () =>
{
    return(

        <div> 
           <ListGroup>
            <Link className="list-group-item list-group-item-action"  to="/first" action> 
               first 
            </Link>
            <Link className="list-group-item list-group-item-action"  to="/second" action> 
               second 
            </Link>
            <Link className="list-group-item list-group-item-action"  to="/third" action> 
               third 
            </Link>
            <Link className="list-group-item list-group-item-action"  to="/fourth" action> 
               fourth
            </Link>



           </ListGroup>

        </div>
    );
}


export default MyOptions;