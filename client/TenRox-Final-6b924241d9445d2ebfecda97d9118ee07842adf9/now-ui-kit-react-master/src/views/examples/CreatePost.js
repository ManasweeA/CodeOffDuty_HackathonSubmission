import React from "react";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImg,
    CardText,
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
    
  } from "reactstrap";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PostPropertyHeader from "components/Headers/PostPropertyHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page


function CreatePost() {
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
        <Col className="ml-auto mr-auto" md="8" style={{ textAlign:"center" }}>
        <h1 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>Post Property</h1>
        <Form>

            <div style={{ marginBottom:"60px", textAlign:"left" }}>
            <Label for="exampleFile">Upload House Cover Pic</Label>
            <Input style={{ textAlign:"center" }} type="file" name="file" id="exampleFile" />
            </div>

            <div style={{ marginBottom:"60px", textAlign:"left" }}>
            <Label for="exampleFile1">Upload House Inside Pic 1</Label>
            <Input style={{ textAlign:"center" }} type="file" name="file" id="exampleFile1" />
            </div>

            <div style={{ marginBottom:"60px", textAlign:"left" }}>
            <Label for="exampleFile2">Upload House Inside Pic 2</Label>
            <Input style={{ textAlign:"center" }} type="file" name="file" id="exampleFile1" />
            </div>

            <FormGroup style={{ textAlign:"left", marginBottom:"60px" }}>
            <Label for="exampleText1">Price</Label>
            <Input type="text" name="text" placeholder="In Rupees/Month" id="exampleText1" />
            </FormGroup>

            <FormGroup style={{ textAlign:"left" }}>
            <Label for="exampleText">Description</Label>
            <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            
            <div style={{ textAlign:"center", marginBottom:"60px" }}>
            <Button style={{ textAlign:"center" }} className="btn-round" color="info" type="submit">
            Submit
            </Button>
            </div>
        </Form>

        
        
        <h3 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"20px" }}>Bungalow</h3>
        <img
            src="https://images.unsplash.com/photo-1568092775154-7fa176a29c0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="House Cover"
            style={{ height:"400px", width:"600px", marginBottom:"60px" }}
          />

        
        
        <h3 style = {{ textAlign:"center", marginBottom:"20px" }}>Furnished House</h3>
        <img
            src="https://images.unsplash.com/photo-1568092775154-7fa176a29c0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="House Cover"
            style={{ height:"400px", width:"600px", marginBottom:"60px" }}
          />

        <h3 style = {{ textAlign:"center", marginBottom:"20px" }}>Furnished House</h3>
        <img
            src="https://images.unsplash.com/photo-1568092775154-7fa176a29c0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="House Cover"
            style={{ height:"400px", width:"600px", marginBottom:"60px" }}
          />

        <div>
            <h4>Price : </h4>
            <h5>Description : </h5>
        </div>

        <div style={{ textAlign:"center", marginBottom:"60px" }}>
            <Button style={{ textAlign:"center" }} className="btn-round" color="info" type="submit">
            Post
            </Button>
        </div>
       
        
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

export default CreatePost;
