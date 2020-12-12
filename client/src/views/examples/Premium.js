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


function Premium() {
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
        
        <Row style={{ marginBottom:"120px" }}>

        <Col className="ml-auto mr-auto" md="12" style={{ textAlign:"center" }}>
        
        <h1 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>Premium</h1>

        <Card style={{ width: "20rem" }}>
        
        <CardBody>
        <i className="now-ui-icons objects_support-17" style={{ fontSize:"200px", color:"red" }}></i>
          <CardTitle tag="h4">Bronze Pack</CardTitle>
          <CardText>
            Get unlimited posts, feature posts, best recommendations, offers, etc for one month.
          </CardText>
          <h4>Rs 199</h4>
          <Button
            color="info"
            href="#"
            onClick={e => e.preventDefault()}
            outline
          >
            Upgrade
          </Button>
        </CardBody>
      </Card>
        
        <Card style={{ width: "20rem", padding:"20px 20px", margin:"10px 30px" }}>
        
        <CardBody>
        <i className="now-ui-icons objects_diamond" style={{ fontSize:"200px", color:"green" }}></i>
          <CardTitle tag="h4">Silver Pack</CardTitle>
          <CardText>
            Get unlimited posts, feature posts, best recommendations, offers, etc for six months.
          </CardText>
          <h4>Rs 499</h4>
          <Button
            color="info"
            href="#"
            onClick={e => e.preventDefault()}
            outline
          >
            Upgrade
          </Button>
        </CardBody>
      </Card>

      <Card style={{ width: "20rem" }}>
        
        <CardBody>
        <i className="now-ui-icons objects_globe" style={{ fontSize:"200px", color:"blue" }}></i>
          <CardTitle tag="h4">Gold Pack</CardTitle>
          <CardText>
            Get unlimited posts, feature posts, best recommendations, offers, etc for twelve months.
          </CardText>
          <h4>Rs 999</h4>
          <Button
            color="info"
            href="#"
            onClick={e => e.preventDefault()}
            outline
          >
            Upgrade
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

export default Premium;
