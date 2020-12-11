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


function RoommatePost() {
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
  const [modalLarge, setModalLarge] = React.useState(false);
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
        <h1 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>Roommate</h1>
        <Form>

            <div style={{ marginBottom:"60px", textAlign:"left" }}>
            <Label for="exampleFile">Upload your Pic</Label>
            <Input style={{ textAlign:"center" }} type="file" name="file" id="exampleFile" />
            </div>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>What type of Person are you ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Highly Focused
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Often Partying/Hanging out
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Focused as well as Hanging out
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Neither Focused nor Hanging out
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>How many roommates do you prefer ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    1-3
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    4-6
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    7-10
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Cool with any
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>What is your current status ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Student
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Employee
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Self Employed
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Free Lancer
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Tourist
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>What is your Roommate preference ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Student
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Employee
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Self Employed
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Free Lancer
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Tourist
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>What is your Roommate alcohol preference ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Shouldn't consume alcohol or any harmful/illegal substance
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Cool with anything
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>What is your marital status ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Married
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Not married
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>What is your Roommate marital preference ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Married
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Not Married
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup style={{ textAlign:"left", marginBottom:"60px" }}>
            <Label for="exampleText1" style={{ fontSize:"25px" }}>What is your Age ?</Label>
            <Input type="text" name="text" placeholder="Enter your age ..." id="exampleText1" />
            </FormGroup>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>What is your Roommate age preference ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    18-25
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    26-30
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    31-45
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    46-60
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Cool with any
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup style={{ textAlign:"left", marginBottom:"60px" }}>
            <Label for="exampleText2" style={{ fontSize:"25px" }}>Where are you from ?</Label>
            <Input type="text" name="text" placeholder="Type Address" id="exampleText2" />
            </FormGroup>

            <FormGroup style={{ textAlign:"left", marginBottom:"60px" }}>
            <Label for="exampleText" style={{ fontSize:"25px" }}>Short Introduction about you</Label>
            <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>

            <FormGroup style={{ textAlign:"left", marginBottom:"60px" }}>
            <Label for="exampleText" style={{ fontSize:"25px" }}>Do you have any other specific Preference ?</Label>
            <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>


            <div style={{ textAlign:"left", paddingLeft:"25px" }}>
                <Label check>
                <Input type="checkbox" />{' '}
                I accept the  
                <a style={{ color:"red" }}
                    onClick={() => setModalLarge(true)}
                >
                 terms & conditions
                </a>
                </Label>
            
            </div>

            <Modal
                isOpen={modalLarge}
                className="modal-lg"
                modalClassName="bd-example-modal-lg"
                toggle={() => setModalLarge(false)}
            >
                <div className="modal-header">
                <h4 className="modal-title" id="myLargeModalLabel">
                    Large modal
                </h4>
                <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={() => setModalLarge(false)}
                >
                    <span aria-hidden={true}>×</span>
                </button>
                </div>
                <div className="modal-body">...</div>
            </Modal>
            
            <div style={{ textAlign:"center", marginBottom:"60px" }}>
            <Button style={{ textAlign:"center" }} className="btn-round" color="info" type="submit">
            Submit
            </Button>
            </div>
        </Form>

        
        
        <h3 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"20px" }}>Pic Uploaded</h3>
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

export default RoommatePost;
