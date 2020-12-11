import React,{useEffect, useState, useContext} from 'react';
import {UserContext} from '../../App';

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  let pageHeader = React.createRef();

  React.useEffect(() => {
  
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    // window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const [mypics,setPics] = useState([])
  const {state,dispatch} = useContext(UserContext)
  const [image,setImage] = useState("")
  const [url,setUrl] = useState("")
  useEffect(()=>{
      fetch('/mypost',{
          headers:{
              "Authorization":"Bearer "+localStorage.getItem("jwt")
          }
      }).then(res=>res.json())
      .then(result=>{
          //console.log(result)
          setPics(result.mypost)
      })
  },[])

  useEffect(()=>{
      if(image){
          const data = new FormData()
          data.append("file", image)
          data.append("upload_preset", "tenrox")
          data.append("cloud_name", "dduj3fext")
          fetch("https://api.cloudinary.com/v1_1/dduj3fext/image/upload",{
              method:"post",
              body:data
          })
          .then(res=>res.json())
          .then(data=>{
      
          
              fetch('/updatepic',{
                  method:"put",
                  headers:{
                      "Content-Type":"application/json",
                      "Authorization":"Bearer "+localStorage.getItem("jwt")
                  },
                  body:JSON.stringify({
                      pic:data.url
                  })
              }).then(res=>res.json())
              .then(result=>{
                  console.log(result)
                  localStorage.setItem("user",JSON.stringify({...state,pic:result.pic}))
                  dispatch({type:"UPDATEPIC",payload:result.pic})
                  //window.location.reload()
              })
          
          })
          .catch(err=>{
              console.log(err)
          })
          }
  },[image])
  const updatePhoto = (file)=>{
      setImage(file)
  }

  

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/house_profile.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img alt="..." src={state?state.pic:"loading"}></img>
          </div>
          <h3 className="title">{state?state.fullName:"loading"}</h3>
          <p className="category">{state?state.email:"loading"}</p>
          <div className="content">
            <div className="social-description">
              <h2>{mypics.length}</h2>
              <p>House Posts</p>
            </div>
            
            <div className="social-description">
              <h2>{state?state.followers.length:"0"}</h2>
              <p>Followers</p>
            </div>
            <div className="social-description">
              <h2>{state?state.following.length:"0"}</h2>
              <p>Following</p>
            </div>
          </div>
        </Container>
      </div>
    </>
        <div className="section">
          <Container>
            <div className="button-container">
              <Button className="btn-round" color="info" size="lg">
                Follow
              </Button>
              
            </div>
            <h3 className="title">About me</h3>
            <h5 className="description">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                
                
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons sport_user-run"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">

                    {
                    mypics.map(item=>{
                    return(
                        <img
                          key={item._id}
                          className="img-raised"
                          src={item.pic1} 
                          alt={item.question6}
                        ></img>
                         )
                        })
                    }
                      
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg11.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
