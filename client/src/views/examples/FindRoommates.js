import React,{useState,useEffect,useContext} from 'react';
import {UserContext} from '../../App';
import {Link} from 'react-router-dom';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImg,
    CardText,
    CardTitle,
    Form,
    FormGroup,
    Input,
    FormText,
    Label,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Modal,
    
  } from "reactstrap";

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PostPropertyHeader from "components/Headers/PostPropertyHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page


function FindRoommates() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PostPropertyHeader />
        <div className="main">
        <>

        <Container>
        <Row>
        <Col className="ml-auto mr-auto" md="12" style={{ textAlign:"center" }}>
        <h1 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>Find Roommates</h1>
        
        <Card style={{ width: "20rem", margin:"20px 20px" }}>
            <CardImg alt="..." src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" top></CardImg>
            <CardBody>
            <CardTitle tag="h4">Card title</CardTitle>
            <CardText>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </CardText>
            <Button
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
            >
                Go somewhere
            </Button>
            </CardBody>
        </Card>

        <Card style={{ width: "20rem", margin:"20px 20px" }}>
            <CardImg alt="..." src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" top></CardImg>
            <CardBody>
            <CardTitle tag="h4">Card title</CardTitle>
            <CardText>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </CardText>
            <Button
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
            >
                Go somewhere
            </Button>
            </CardBody>
        </Card>

        <Card style={{ width: "20rem", margin:"20px 20px" }}>
            <CardImg alt="..." src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" top></CardImg>
            <CardBody>
            <CardTitle tag="h4">Card title</CardTitle>
            <CardText>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </CardText>
            <Button
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
            >
                Go somewhere
            </Button>
            </CardBody>
        </Card>
        
        <Card style={{ width: "20rem", margin:"20px 20px" }}>
            <CardImg alt="..." src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" top></CardImg>
            <CardBody>
            <CardTitle tag="h4">Card title</CardTitle>
            <CardText>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </CardText>
            <Button
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
            >
                Go somewhere
            </Button>
            </CardBody>
        </Card>

        <Card style={{ width: "20rem", margin:"20px 20px" }}>
            <CardImg alt="..." src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" top></CardImg>
            <CardBody>
            <CardTitle tag="h4">Card title</CardTitle>
            <CardText>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </CardText>
            <Button
                color="primary"
                href="#pablo"
                onClick={e => e.preventDefault()}
            >
                Go somewhere
            </Button>
            </CardBody>
        </Card>
        
       
        
        </Col>
        </Row>
        </Container>
        </>
         
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default FindRoommates;
