import React,{useEffect, useState, useContext} from 'react';
import {UserContext} from '../../App';
import {useParams, Link} from 'react-router-dom';

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
    // window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  
  const [userProfile,setProfile] = useState(null)
  //const [showfollow,setShowFollow] = useState(true)
  const {state,dispatch} = useContext(UserContext)
  const {houseid} = useParams()

  console.log(houseid)
  
  //console.log(userid)
  useEffect(()=>{
    fetch('/houseviewed',{
      method:"put",
      headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
          viewId:houseid
      })
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
    }).catch(err=>{
        console.log(err)
    })


    fetch(`/house/${houseid}`,{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
        setProfile(result)
    })
  },[])


  const makeComment = (text,postId)=>{
    fetch('/comment',{
        method:"put",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            postId,
            text
        })
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
        setProfile(result)
    }).catch(err=>{
        console.log(err)
    })
  }

  console.log(userProfile)
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PostPropertyHeader />
        <div className="main">
        <>

        { userProfile?

        <Container>

        <Row>
        <Col className="ml-auto mr-auto" md="12" style={{ textAlign:"center" }}>

        
        <h1 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>Property Description</h1>
        <h5>Property posted by : <Link to={userProfile.house.postedBy._id !== state._id ? "/profile/"+userProfile.house.postedBy._id :"/profile/"}>{userProfile.house.postedBy.fullName}</Link></h5>
        <h5>Interested in the property?</h5>
        <Button style={{ textAlign:"center", marginBottom:"60px" }} className="btn-round" color="info" type="submit">
            Interested
        </Button>
        </Col>
        </Row>

        <Row>
        <Col className="ml-auto mr-auto" md="6" style={{ textAlign:"center" }}>
        <h3 style = {{ textAlign:"center", marginTop:"30px", marginBottom:"30px" }}><b>Property Description</b></h3>
        <h4>House Structure : <b>{userProfile.house.house_struct}</b></h4>
        <h4>House Type : <b>{userProfile.house.house_type}</b></h4>

        <h5 >Customer Age Preference : <b>{userProfile.house.question1}</b></h5>

        <h5>Customer Marital Preference : <b>{userProfile.house.question2}</b></h5>
        <h5>Price : <b>{"Rs "+ userProfile.house.question3 + " /month"}</b></h5>
        <h5>Description : {userProfile.house.question4}</h5>
        <h5>Address : </h5>
        <h7>{ userProfile.house.question5 + " " + userProfile.house.question6 + " " + userProfile.house.question7 + " " + userProfile.house.question8 + " " + userProfile.house.question9 }</h7>
        </Col>
        <Col className="ml-auto mr-auto" md="6" style={{ textAlign:"center" }}>
        <img
            src={userProfile.house.pic1}
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
            src={userProfile.house.pic2}
            alt="House Cover"
            style={{ height:"400px", width:"600px", marginBottom:"60px" }}
          />
        </Col>
        <Col className="ml-auto mr-auto" md="6" style={{ textAlign:"center" }}>
        <img
            src={userProfile.house.pic3}
            alt="House Cover"
            style={{ height:"400px", width:"600px", marginBottom:"60px" }}
          />
        </Col>
        </Row>


        <Row>
        <Col className="ml-auto mr-auto" md="12" style={{ textAlign:"center" }}>
        <h4 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>Reviews</h4>

        <form onSubmit={(e)=>{
            e.preventDefault()
            //console.log(e.target)
            //console.log(e.target[0].value)
            makeComment(e.target[0].value,userProfile.house._id)
            e.target[0].value = ""
        }}>
            <Label for="exampleText">Enter your Review</Label>
            <Input type="textarea" name="text" id="exampleText" />
            <Button color="info" type="submit" style={{ marginBottom:"60px" }}>Post</Button>
        </form>

        {
          userProfile.house.comments.map(record=>{
              return(
        <Card key={record._id}>
            <CardBody>
            <blockquote className="blockquote blockquote-primary mb-0">
                <p>
                {record.text}
                </p>
                <footer className="blockquote-footer">
                {record.postedBy.fullName}
                </footer>
            </blockquote>
            </CardBody>
        </Card>
        )
        })
      }
       
        </Col>
        </Row>



        </Container>

        :
      <h2>loading ...</h2>
    }
        </>
         
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default PropertyDetailedPage;
