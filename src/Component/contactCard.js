import './common.css';
import React, { useState } from 'react';
import { Card,CardBody,CardTitle,CardSubtitle, CardText} from 'react-bootstrap';
import { Button } from 'reactstrap';
function ContactCard({ contact }) {
const [contact1,setContact]=useState([
  {name:"laxmi",dob:"2025-09-09",mobno:"1234567890"}
])
return (
<>
<Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      {contact.name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {contact.designation}
    </CardSubtitle>
    <CardText>
      {contact.discription}
      </CardText>


<Button color="success" size="sm" style={{marginLeft:"20px"}}>save</Button>
     
<Button color="dark" size="sm" style={{marginLeft:"20px"}}>
      edit
    </Button>
<Button color="danger" size="sm" style={{marginLeft:"20px"}}>
      Delete
    </Button>
  </CardBody>
</Card>

</>  
);
}

export default ContactCard;
