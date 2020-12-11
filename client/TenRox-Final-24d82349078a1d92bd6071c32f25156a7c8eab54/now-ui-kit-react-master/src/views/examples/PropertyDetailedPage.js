import React from "react";

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

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PostPropertyHeader from "components/Headers/PostPropertyHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page


function PropertyDetailedPage() {
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
        <h1 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>Property Description</h1>
        <h5>Property posted by : First Name Last Name</h5>
        <h5>Date Posted : 12/10/2020</h5>
        <h5>Interested in the property?</h5>
        <Button style={{ textAlign:"center", marginBottom:"60px" }} className="btn-round" color="info" type="submit">
            Interested
            </Button>
        </Col>
        </Row>

        <Row>
        <Col className="ml-auto mr-auto" md="6" style={{ textAlign:"center" }}>
        <h3 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>Property Description</h3>
        </Col>
        <Col className="ml-auto mr-auto" md="6" style={{ textAlign:"center" }}>
        <img
            src="https://images.unsplash.com/photo-1568092775154-7fa176a29c0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="House Cover"
            style={{ height:"400px", width:"600px", marginBottom:"60px" }}
          />
        </Col>
        </Row>

        <Row>
        <Col className="ml-auto mr-auto" md="12" style={{ textAlign:"center" }}>
        <h4 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>Interior Pictures</h4>
        </Col>
        </Row>

        <Row>
        <Col className="ml-auto mr-auto" md="6" style={{ textAlign:"center" }}>
        <img
            src="https://images.unsplash.com/photo-1568092775154-7fa176a29c0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="House Cover"
            style={{ height:"400px", width:"600px", marginBottom:"60px" }}
          />
        </Col>
        <Col className="ml-auto mr-auto" md="6" style={{ textAlign:"center" }}>
        <img
            src="https://images.unsplash.com/photo-1568092775154-7fa176a29c0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="House Cover"
            style={{ height:"400px", width:"600px", marginBottom:"60px" }}
          />
        </Col>
        </Row>


        <Row>
        <Col className="ml-auto mr-auto" md="12" style={{ textAlign:"center" }}>
        <h4 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>Reviews</h4>

        <FormGroup style={{ textAlign:"left", marginBottom:"60px" }}>
            <Label for="exampleText">Enter your Review</Label>
            <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>

        <Card>
            <CardBody>
            <blockquote className="blockquote blockquote-primary mb-0">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
            </blockquote>
            </CardBody>
        </Card>

        <Card>
            <CardBody>
            <blockquote className="blockquote blockquote-primary mb-0">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
            </blockquote>
            </CardBody>
        </Card>

        <Card>
            <CardBody>
            <blockquote className="blockquote blockquote-primary mb-0">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
            </blockquote>
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

export default PropertyDetailedPage;
