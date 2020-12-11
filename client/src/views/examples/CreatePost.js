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
  const [modalLarge, setModalLarge] = React.useState(false);
    const history = useHistory()
    const [image1,setImage1] = useState("")
    const [image2,setImage2] = useState("")
    const [image3,setImage3] = useState("")
    const [url1,setUrl1] = useState("")
    const [url2,setUrl2] = useState("")
    const [url3,setUrl3] = useState("")
    const [question1,setQuestion1] = useState("")
    const [question2,setQuestion2] = useState("")
    const [question3,setQuestion3] = useState("")
    const [question4,setQuestion4] = useState("")
    const [question5,setQuestion5] = useState("")
    const [question6,setQuestion6] = useState("")
    const [question7,setQuestion7] = useState("")
    const [question8,setQuestion8] = useState("")
    const [question9,setQuestion9] = useState("")
    const [checkbox,setCheckbox] = useState("")

    const [flag,setFlag] = useState("0")

    const postDetails=()=>{
        console.log("In Post Details function")
        console.log(question1)
        
        if(image1 && image2 && image3){
            const formData = new FormData();
            formData.append('myImage',image1);
            console.log(formData.get('myImage'))

            fetch("/createpost", {
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    pic1:url1,
                    pic2:url2,
                    pic3:url3,
                    question1,
                    question2,
                    question3,
                    question4,
                    question5,
                    question6,
                    question7,
                    question8,
                    question9,
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
                    history.push('/create-post')
                    setFlag("1")
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }

    const postuploads=()=>{
        if(!image1 && !image2 && !image3){
            toast.error("Upload all Images", {
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
        if(!question1 && !question2 && !question3 && !question4 && !question5 && !question6 && !question7 && !question8 && !question9) 
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
            uploadimage2()
        }
    },[url1])

    useEffect(()=>{
        if(url2){
            uploadimage3()
        }
    },[url2])

    useEffect(()=>{
        if(url3){
            postDetails()
        }
    },[url3])


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

    const uploadimage2=()=>{
        const data = new FormData()
            data.append("file", image2)
            data.append("upload_preset", "tenouse")
            data.append("cloud_name", "safcloud")
            fetch("https://api.cloudinary.com/v1_1/safcloud/image/upload",{
                method:"post",
                body:data
            })
            .then(res=>res.json())
            .then(data=>{
                //console.log(data)
                setUrl2(data.url)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    const uploadimage3=()=>{
        const data = new FormData()
            data.append("file", image3)
            data.append("upload_preset", "tenouse")
            data.append("cloud_name", "safcloud")
            fetch("https://api.cloudinary.com/v1_1/safcloud/image/upload",{
                method:"post",
                body:data
            })
            .then(res=>res.json())
            .then(data=>{
                //console.log(data)
                setUrl3(data.url)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    const renderList = ()=>{
        if (flag==='0'){
            return [
                <Form>

                <div style={{ marginBottom:"60px", textAlign:"left" }}>
                <Label for="exampleFile">Upload House Cover Pic</Label>
                <Input style={{ textAlign:"center" }} type="file" name="file" id="exampleFile" onChange={(e)=>setImage1(e.target.files[0])} />
                </div>

                <div style={{ marginBottom:"60px", textAlign:"left" }}>
                <Label for="exampleFile1">Upload House Inside Pic 1</Label>
                <Input style={{ textAlign:"center" }} type="file" name="file" id="exampleFile1" onChange={(e)=>setImage2(e.target.files[0])} />
                </div>

                <div style={{ marginBottom:"60px", textAlign:"left" }}>
                <Label for="exampleFile2">Upload House Inside Pic 2</Label>
                <Input style={{ textAlign:"center" }} type="file" name="file" id="exampleFile1" onChange={(e)=>setImage3(e.target.files[0])} />
                </div>

                <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend style={{ fontSize:"15px" }}>What is your Customer age preference ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" value="18-25" onChange={(e)=>setQuestion1(e.target.value)} />{'18-25'}
                  
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" value="26-30" onChange={(e)=>setQuestion1(e.target.value)} />{'26-30'}
                    
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" value="31-45" onChange={(e)=>setQuestion1(e.target.value)} />{'31-45'}
                    
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" value="46-60" onChange={(e)=>setQuestion1(e.target.value)} />{'46-60'}
                    
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio1" value="Cool with any" onChange={(e)=>setQuestion1(e.target.value)} />{'Cool with any'}
                    
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                <legend style={{ fontSize:"15px" }}>What is your Customer marital preference ?</legend>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio2" value="Married" onChange={(e)=>setQuestion2(e.target.value)} />{' '}
                    Married
                </Label>
                </FormGroup>
                <FormGroup check>
                <Label check>
                    <Input type="radio" name="radio2" value="Not Married" onChange={(e)=>setQuestion2(e.target.value)} />{' '}
                    Not Married
                </Label>
                </FormGroup>
            
            </FormGroup>

            <FormGroup style={{ textAlign:"left", marginBottom:"60px" }}>
            <Label for="exampleText1">Price</Label>
            <Input type="text" name="text" placeholder="In Rupees/Month" id="exampleText1" onChange={(e)=>setQuestion3(e.target.value)} />
            </FormGroup>

            <FormGroup style={{ textAlign:"left" }}>
            <Label for="exampleText">Description</Label>
            <Input type="textarea" name="text" id="exampleText" onChange={(e)=>setQuestion4(e.target.value)} />
            </FormGroup>

            <FormGroup style={{ textAlign:"left", marginBottom:"60px" }}>
            <Label for="exampleText2">Address</Label>
            <Input type="text" name="text" placeholder="Type Address" id="exampleText2" onChange={(e)=>setQuestion5(e.target.value)} />
            </FormGroup>

            <FormGroup style={{ textAlign:"left", marginBottom:"60px" }}>
            <Label for="exampleText3">City</Label>
            <Input type="text" name="text" placeholder="Type City" id="exampleText3" onChange={(e)=>setQuestion6(e.target.value)} />
            </FormGroup>

            <FormGroup style={{ textAlign:"left", marginBottom:"60px" }}>
            <Label for="exampleText4">State</Label>
            <Input type="text" name="text" placeholder="Type State" id="exampleText4" onChange={(e)=>setQuestion7(e.target.value)} />
            </FormGroup>

            <FormGroup style={{ textAlign:"left", marginBottom:"60px" }}>
            <Label for="exampleText5">Country</Label>
            <Input type="text" name="text" placeholder="Type Country" id="exampleText5" onChange={(e)=>setQuestion8(e.target.value)} />
            </FormGroup>

            <FormGroup style={{ textAlign:"left", marginBottom:"60px" }}>
            <Label for="exampleText4">Postal Code</Label>
            <Input type="text" name="text" placeholder="Type Postal Code" id="exampleText4" onChange={(e)=>setQuestion9(e.target.value)} />
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
            <Button style={{ textAlign:"center" }} className="btn-round" color="info" onClick={()=>postuploads()}>
            Submit
            </Button>
            </div>
        </Form>
            ]
        }
        else{
            return [
            <>
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
            </>
            ]
        }
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
        <h1 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>Post Property</h1>
        
        
        {renderList()}
       
        
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
