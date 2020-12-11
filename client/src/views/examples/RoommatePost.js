import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

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

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PostPropertyHeader from "components/Headers/PostPropertyHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page

toast.configure()


function RoommatePost() {
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
  const [modalLarge, setModalLarge] = React.useState(false);
  const history = useHistory()
    const [image1,setImage1] = useState("")
    const [url1,setUrl1] = useState("")
    const [question1,setQuestion1] = useState("")
    const [question2,setQuestion2] = useState("")
    const [question3,setQuestion3] = useState("")
    const [question4,setQuestion4] = useState("")
    const [question5,setQuestion5] = useState("")
    const [question6,setQuestion6] = useState("")
    const [question7,setQuestion7] = useState("")
    const [question8,setQuestion8] = useState("")
    const [question9,setQuestion9] = useState("")
    const [question10,setQuestion10] = useState("")
    const [question11,setQuestion11] = useState("")
    const [question12,setQuestion12] = useState("")
    const [question13,setQuestion13] = useState("")
    const [question14,setQuestion14] = useState("")
    const [checkbox,setCheckbox] = useState("")

    const VerifiedPostDetails=()=>{
        console.log("In Verified Post Details function")
        console.log(question1)

        fetch("/createroommatepost", {
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                pic1:url1,
                question1,
                question2,
                question3,
                question4,
                question5,
                question6,
                question7,
                question8,
                question9,
                question10,
                question11,
                question12,
                question13,
                question14,
            })
        }).then(res=>res.json())
        .then(data=>{
            //console.log(data)
            if(data.error){
                toast.error(data.error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            else{
                toast.success("Created Post Successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                history.push('/')
            }
        }).catch(err=>{
            console.log(err)
        })

    }

    const postuploads=()=>{
        if(!image1){
            toast.error("Upload the Image", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        if(!question1 && !question2 && !question3 && !question4 && !question5 && !question6 && !question7 && !question8 && !question9 && !question10 && !question11 && !question12 && !question13) 
        {  
            toast.error("Answer all questions", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        if(!checkbox){
            toast.error("Please mark the checkbox", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return
        }
        uploadimage1()
    }

    useEffect(()=>{
        if(url1){
            toast.dark("Image uploaded", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            VerifiedPostDetails()
        }
    },[url1])

    const uploadimage1=()=>{
        const data = new FormData()
            data.append("file", image1)
            data.append("upload_preset", "tenouse")
            data.append("cloud_name", "safcloud")
            fetch("https://api.cloudinary.com/v1_1/safcloud/image/upload",{
                method:"post",
                body:data
            })
            .then(res=>res.json())
            .then(data=>{
                //console.log(data)
                setUrl1(data.url)
            })
            .catch(err=>{
                console.log(err)
            })
    }

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
            <Input style={{ textAlign:"center" }} type="file" name="file" id="exampleFile" onChange={(e)=>setImage1(e.target.files[0])} />
            </div>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>What type of Person are you ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" value="Highly Focused" onChange={(e)=>setQuestion1(e.target.value)} />{'Highly Focused'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" value="Often Partying/Hanging out" onChange={(e)=>setQuestion1(e.target.value)} />{'Often Partying/Hanging out'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" value="Focused as well as Hanging out" onChange={(e)=>setQuestion1(e.target.value)} />{'Focused as well as Hanging out'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" value="Neither Focused nor Hanging out" onChange={(e)=>setQuestion1(e.target.value)} />{'Neither Focused nor Hanging out'}
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>How many roommates do you prefer ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio2" value="1-3" onChange={(e)=>setQuestion2(e.target.value)} />{'1-3'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio2" value="4-6" onChange={(e)=>setQuestion2(e.target.value)} />{'4-6'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio2" value="7-10" onChange={(e)=>setQuestion2(e.target.value)} />{'7-10'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio2" value="Cool with any" onChange={(e)=>setQuestion2(e.target.value)} />{'Cool with any'}
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>What is your current status ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio3" value="Student" onChange={(e)=>setQuestion3(e.target.value)} />{'Student'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio3" value="Employee" onChange={(e)=>setQuestion3(e.target.value)} />{'Employee'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio3" value="Self Employed" onChange={(e)=>setQuestion3(e.target.value)} />{'Self Employed'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio3" value="Free Lancer" onChange={(e)=>setQuestion3(e.target.value)} />{'Free Lancer'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio3" value="Tourist" onChange={(e)=>setQuestion3(e.target.value)} />{'Tourist'}
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>What is your Roommate gender preference ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio4" value="Male" onChange={(e)=>setQuestion4(e.target.value)} />{'Male'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio4" value="Female" onChange={(e)=>setQuestion4(e.target.value)} />{'Female'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio4" value="Any" onChange={(e)=>setQuestion4(e.target.value)} />{'Any'}
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>What is your Roommate preference ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio5" value="Student" onChange={(e)=>setQuestion5(e.target.value)} />{'Student'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio5" value="Employee" onChange={(e)=>setQuestion5(e.target.value)} />{'Employee'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio5" value="Self Employed" onChange={(e)=>setQuestion5(e.target.value)} />{'Self Employed'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio5" value="Free Lancer" onChange={(e)=>setQuestion5(e.target.value)} />{'Free Lancer'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio5" value="Tourist" onChange={(e)=>setQuestion5(e.target.value)} />{'Tourist'}
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>What is your Roommate alcohol preference ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio6" value="Shouldn't consume alcohol or any harmful/illegal substance" onChange={(e)=>setQuestion6(e.target.value)} />{"Shouldn't consume alcohol or any harmful/illegal substance"}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio6" value="Cool with anything" onChange={(e)=>setQuestion6(e.target.value)} />{'Cool with anything'}
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>What is your marital status ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio7" value="Married" onChange={(e)=>setQuestion7(e.target.value)} />{'Married'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio7" value="Not married" onChange={(e)=>setQuestion7(e.target.value)} />{'Not married'}
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>What is your Roommate marital preference ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio8" value="Married" onChange={(e)=>setQuestion8(e.target.value)} />{'Married'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio8" value="Not Married" onChange={(e)=>setQuestion8(e.target.value)} />{'Not Married'}
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup style={{ textAlign:"left", marginBottom:"60px" }}>
            <Label for="exampleText1" style={{ fontSize:"25px" }}>What is your Age ?</Label>
            <Input type="text" name="text" placeholder="Enter your age ..." id="exampleText1" onChange={(e)=>setQuestion9(e.target.value)} />
            </FormGroup>


            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>What is your Gender ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio9" value="Male" onChange={(e)=>setQuestion10(e.target.value)} />{'Male'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio9" value="Female" onChange={(e)=>setQuestion10(e.target.value)} />{'Female'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio9" value="Prefer not to say" onChange={(e)=>setQuestion10(e.target.value)} />{'Prefer not to say'}
                </Label>
                </FormGroup>
            
            </FormGroup>
            

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend>What is your Roommate age preference ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio10" value="18-25" onChange={(e)=>setQuestion11(e.target.value)} />{'18-25'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio10" value="26-30" onChange={(e)=>setQuestion11(e.target.value)} />{'26-30'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio10" value="31-45" onChange={(e)=>setQuestion11(e.target.value)} />{'31-45'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio10" value="46-60" onChange={(e)=>setQuestion11(e.target.value)} />{'46-60'}
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio10" value="Cool with any" onChange={(e)=>setQuestion11(e.target.value)} />{'Cool with any'}
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup style={{ textAlign:"left", marginBottom:"60px" }}>
            <Label for="exampleText2" style={{ fontSize:"25px" }}>Where are you from ?</Label>
            <Input type="text" name="text" placeholder="Type Address" id="exampleText2" onChange={(e)=>setQuestion12(e.target.value)} />
            </FormGroup>

            <FormGroup style={{ textAlign:"left", marginBottom:"60px" }}>
            <Label for="exampleText3" style={{ fontSize:"25px" }}>Short Introduction about you</Label>
            <Input type="textarea" name="text" id="exampleText3" onChange={(e)=>setQuestion13(e.target.value)} />
            </FormGroup>

            <FormGroup style={{ textAlign:"left", marginBottom:"60px" }}>
            <Label for="exampleText" style={{ fontSize:"25px" }}>Do you have any other specific Preference ?</Label>
            <Input type="textarea" name="text" id="exampleText" onChange={(e)=>setQuestion14(e.target.value)} />
            </FormGroup>


            <div style={{ textAlign:"left", paddingLeft:"25px" }}>
                <Label check>
                <Input type="checkbox" onChange={(e)=>setCheckbox(e.target.value)} />
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
            <Button style={{ textAlign:"center" }} className="btn-round" color="info" onClick={()=>postuploads()} >
            Submit
            </Button>
            </div>
        </Form>
       
        
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
