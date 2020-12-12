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
    TabPane,
    TabContent,
    Nav,
    NavItem,
    NavLink
    
  } from "reactstrap";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import PostPropertyHeader from "components/Headers/PostPropertyHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page


function Messages() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    // window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const [plainTabs, setPlainTabs] = React.useState("1");

  return (
    <>
      <ColorNavbar />
      <div className="wrapper">
        
        <div className="main">
        <>

        <Container>

        <Row>
        <Col className="ml-auto mr-auto" md="12" style={{ textAlign:"center" }}>
        <h1 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>Messages</h1>
        

        <Card className="card-nav-tabs card-plain">

        <Col className="ml-auto mr-auto" md="4" style={{ textAlign:"center" }}>
        <CardHeader className="card-header-danger" className="flex-column">


          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">



              <Nav data-tabs="tabs" tabs >
                <NavItem>
                  <NavLink
                    className={plainTabs === "1" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("1");
                    }}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={plainTabs === "2" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("2");
                    }}
                  >
                    Updates
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={plainTabs === "3" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("3");
                    }}
                  >
                    History
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
        </CardHeader>
        </Col>

        <Col className="ml-auto mr-auto" md="8" style={{ textAlign:"center" }}>        
        <CardBody>
          <TabContent
            className="text-center"
            activeTab={"plainTabs" + plainTabs}
          >
            <TabPane tabId="plainTabs1">
              <p>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. So when you get something that has the name Kanye
                West on it, it’s supposed to be pushing the furthest
                possibilities. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus.
              </p>
            </TabPane>
            <TabPane tabId="plainTabs2">
              <p>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility
                that I have, to push possibilities, to show people, this is
                the level that things could be at. I think that’s a
                responsibility that I have, to push possibilities, to show
                people, this is the level that things could be at.
              </p>
            </TabPane>
            <TabPane tabId="plainTabs3">
              <p>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that things
                could be at. I will be the leader of a company that ends up
                being worth billions of dollars, because I got the answers. I
                understand culture. I am the nucleus. I think that’s a
                responsibility that I have, to push possibilities, to show
                people, this is the level that things could be at.
              </p>
            </TabPane>
          </TabContent>
        </CardBody>
        </Col>    
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

export default Messages;
