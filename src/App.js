import React from 'react';
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import Navbar1 from './Component/Navbar1';
import ContactCard from './Component/contactCard';
import Home from './Component/Home';
import AllContact from './Component/AllContact';
import AddContact from './Component/AddContact';
import Menu from './Menu';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import Login from './Component/Login';
import AppLayout from "./Component/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import { margin } from '@mui/system';
import { Table } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Navbar1 />
      <Container  fluid  >
        {/* <Card color=''>
          <CardBody className='my-2' style={{ textAlign: 'center', color: 'black' }}>
            <h1>Welcome To JUNO Contact Application</h1>
          </CardBody>
        </Card> */}
        <Table><Row className='g-0  m-0' color='gray'>
          <Col md={2} style={{margin:0}}><Menu /></Col>
          <Col md={10}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/view" element={<AllContact />} />
              <Route path="/add" element={<AddContact />} />
              <Route path="/login" element={<Login />} />

            </Routes>
          </Col>
        </Row>
        </Table>
 
      </Container>
    </Router>
  );
}


//  function App = ()=> {
// const router=createBrowserRouter([{
//   path:"/",
//   element:<AppLayout/>,
//   children:[{
//     path:"/",
//     element:<Home/>,
//   }]
// }]);
// return <RouterProvider router={router}  
// };
  export default App;
