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


function FollowingProperty() {
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

    const [suggestiondata,setSuggestionData] = useState(undefined)
    const [data,setData] = useState(undefined)
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
        
        fetch('/getsubpost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result.posts)
        })

        

    },[])

    const likePost = (id)=>{
        fetch('/like',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            //console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id)
                {
                    return result
                }
                else{
                    return item
                }
            })
            setData(newData)
        }).catch(err=>{
            console.log(err)
        })
    }

    const unlikePost = (id)=>{
        fetch('/unlike',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            //console.log(result)
            const newData = data.map(item=>{
                if(item._id==result._id)
                {
                    return result
                }
                else{
                    return item
                }
            })
            setData(newData)
        }).catch(err=>{
            console.log(err)
        })
    }

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
            const newData = data.map(item=>{
                if(item._id==result._id)
                {
                    return result
                }
                else{
                    return item
                }
            })
            setData(newData)
        }).catch(err=>{
            console.log(err)
        })
    }

    const deletePost = (postid)=>{
        fetch(`/deletepost/${postid}`,{
            method:"delete",
            headers:{
                Authorization:"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            const newData = data.filter(item=>{
                return item._id !== result._id
            })
            setData(newData)
        })
    }
  
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PostPropertyHeader />
        <div className="main">
        {data?
        <>

        <Container>
        
        <Row>

        <Col className="ml-auto mr-auto" md="12" style={{ textAlign:"center" }}>
        
        <h1 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>Following Property</h1>

        {
            data.map(item=>{
                return(
        
        <Card style={{ width: "20rem", margin:"20px 20px" }}>
        <Link to={"/property-detailed-page/"+item._id }><CardImg alt="..." src={item.pic1} top style={{ height:"200px", width:"350px" }}></CardImg></Link>
            <CardBody>

            {item.likes.includes(state._id)
            ?  
           <i style={{ color:"red", padding:"10px", fontSize:"20px" }} className="now-ui-icons ui-2_favourite-28" onClick={()=>{unlikePost(item._id)}} >{item.likes.length}</i>
           :
           <i style={{ padding:"10px", fontSize:"20px" }} className="now-ui-icons ui-2_favourite-28" onClick={()=>{likePost(item._id)}}>{item.likes.length}</i>
            }

           {item.postedBy._id == state._id
            && 
            <i style={{ padding:"10px", fontSize:"20px" }} className="now-ui-icons files_box" onClick={()=>deletePost(item._id)}></i>
           }

            <CardTitle tag="h4">{item.question6 + " " + item.question7}</CardTitle>
            {item.house_struct + ", " + item.house_type}

            <Row style={{ marginTop:"10px", marginBottom:"10px" }}>
            <Col><i className="now-ui-icons health_ambulance" style={{ fontSize:"25px" }}></i>{" "}5 km</Col>
            <Col><i className="now-ui-icons business_bank" style={{ fontSize:"20px" }}></i>{" "}10 km</Col>
            </Row>

            <Row style={{ marginTop:"10px", marginBottom:"10px" }}>
            <Col><i className="now-ui-icons shopping_cart-simple" style={{ fontSize:"25px" }}></i>{" "}15 km</Col>
            <Col><i className="now-ui-icons objects_spaceship" style={{ fontSize:"20px" }}></i>{" "}12 km</Col>
            </Row>
            
            <CardText>
                {"Rs " + item.question3}
                <h6> - <Link to={item.postedBy._id !== state._id ? "/profile/"+item.postedBy._id :"/profile/"}>{item.postedBy.fullName}</Link></h6>
            </CardText>
            
            </CardBody>
        </Card>

        )
            })
        }

        
        </Col>
        </Row>
        
        </Container>
        </>

        : 
        <Container>
        
        <Row>

        <Col className="ml-auto mr-auto" md="12" style={{ textAlign:"center" }}>
        <i style={{ marginLeft:"auto", marginRight:"auto", marginTop:"200px", fontSize:"200px" }} className="now-ui-icons loader_refresh"></i>
        <h2 style={{  marginBottom:"200px" }}>Loading...</h2>
        </Col>
        </Row>
        </Container>
        }
         
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default FollowingProperty;
