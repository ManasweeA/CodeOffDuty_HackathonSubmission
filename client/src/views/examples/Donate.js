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



// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PostPropertyHeader from "components/Headers/PostPropertyHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page


function Donate() {
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

        <Container style={{ marginBottom:"120px" }}>
        <Col className="ml-auto mr-auto" md="12" style={{ textAlign:"center" }}>
        <h1 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>Donate</h1>

        <Row>

        <Col md="6">
        <h4 style={{ marginTop:"60px" }}>
            We, The Tenouse Team is committed to help the homeless, by paying for their rents and giving them a space to live. We have helped more than 200 homeless people, and 
            are looking forward to increase that number incredibly. Join us in the good work by donating an ounce of your money. Your one click might 
            save someone's life. Let's give a helping hand to all those humans fighting poverty.
        </h4>

        <Button className="btn-round"  style={{ color:"white", background:"red" }} >
        <i className="fa fa-heart" />{' '}
            Donate
        </Button>
            
        </Col>
        <Col md="6">
            <img src="https://www.thevisionfoundation.in/assets/images/donate_1.png" style={{ margin:"30px 30px" }} />
        </Col>
        
       

        
        </Row>
        </Col>
        
        
        </Container>
        </>

        
         
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Donate;
