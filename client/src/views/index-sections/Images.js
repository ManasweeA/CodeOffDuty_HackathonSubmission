import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              
              <div className="hero-images-container">
                <img
                  alt="..."
                  src={require("assets/img/house_home.png")}
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  alt="..."
                  src={require("assets/img/hero-image-3.png")}
                ></img>
              </div>

              
            </Col>
          </Row>
          
        </Container>

        <div className="section section-basic" id="basic-elements">
          <Container>
          <h1 style={{ textAlign:"center", marginTop:"200px" }}>About</h1>
          <h4 style={{ textAlign:"center" }}>Tenouse is an AI based system to intimate the tenants and other folks. The 
          purpose of this application is to give the best options to the users and remove the need of third-person for renting a house.
          This is a cost effective, feasible and portable solution. It is World's first AI based platform to find your dream house.</h4>
          </Container>
          </div>
        
      </div>
      
    </>
  );
}

export default Images;
