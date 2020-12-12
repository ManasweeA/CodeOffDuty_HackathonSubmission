import React,{useState,useEffect,useContext} from 'react';
import {UserContext} from '.././App';
import {Link} from 'react-router-dom';

// reactstrap components
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
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import Images from "./index-sections/Images.js";
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Tabs from "./index-sections/Tabs.js";
import Pagination from "./index-sections/Pagination.js";
import Notifications from "./index-sections/Notifications.js";
import Typography from "./index-sections/Typography.js";
import Javascript from "./index-sections/Javascript.js";
import Carousel from "./index-sections/Carousel.js";
import NucleoIcons from "./index-sections/NucleoIcons.js";
import CompleteExamples from "./index-sections/CompleteExamples.js";
import SignUp from "./index-sections/SignUp.js";
import Examples from "./index-sections/Examples.js";
import Download from "./index-sections/Download.js";

function Index() {
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

  const [data,setData] = useState(undefined)
  const [data1,setData1] = useState(undefined)
  const {state,dispatch} = useContext(UserContext)

  useEffect(()=>{
    
    fetch('/allpost',{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
        let vals = []
        for(let i =0; i<6; i++){
            vals.push(result.posts[i])
        }
        setData(vals)
    })

    fetch('/allroommates',{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
        let vals = []
        for(let i =0; i<6; i++){
            vals.push(result.posts[i])
        }
        setData1(vals)
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


    const connectRoommate = (id)=>{
        fetch('/roommateconnect',{
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

    const unconnectRoommate = (id)=>{
        fetch('/roommateunconnect',{
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

    const deletePost1 = (postid)=>{
        fetch(`/roommatedeletepost/${postid}`,{
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
        <IndexHeader />
        <div className="main" >
          <Images />
          
        
        {data?
        <>

        <Container>
        
        <Row>

        <Col className="ml-auto mr-auto" md="12" style={{ textAlign:"center" }}>
        
        <h1 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>Rent Property</h1>

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

        {
            data?
            <>
        <Container>
        <Row>
        <Col className="ml-auto mr-auto" md="12" style={{ textAlign:"center" }}>
        <h1 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>Find Roommates</h1>
        

        {
            data1.map(item=>{
                return(

        <Card style={{ width: "20rem", margin:"20px 20px" }}>
            <CardImg alt="..." src={item.pic1} top style={{ height:"200px", width:"350px" }}></CardImg>
            <CardBody>
            <CardTitle tag="h4"><Link to={item.postedBy._id !== state._id ? "/profile/"+item.postedBy._id :"/profile/"}>{item.postedBy.fullName}</Link></CardTitle>

            
            <CardText>
            <div>
                <h7>{ item.question9 + ", " + item.question12}</h7>
            </div>
            <div>
                <h7>{ item.question10 + ", " + item.question7}</h7>
            </div>
                
            </CardText>

           {item.postedBy._id != state._id && 
            item.connected.includes(state._id)
            ?  
            <Button
                color="danger"
                href="#pablo"
                onClick={()=>{unconnectRoommate(item._id)}}
            >
                Unconnect
            </Button>
            : item.postedBy._id != state._id && 
            <Button
                color="info"
                href="#pablo"
                onClick={()=>{connectRoommate(item._id)}}
            >
                Connect
            </Button>
            
           }

           {item.postedBy._id == state._id
            && 
            <i style={{ padding:"10px", fontSize:"20px" }} className="now-ui-icons files_box" onClick={()=>deletePost1(item._id)}></i>
           }
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
         
        </div>
        <DarkFooter />
     
    </>
  );
}

export default Index;
