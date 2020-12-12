import React,{useState,useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Alert,
  UncontrolledAlert,
  FormGroup,
  Label
} from "reactstrap";

// Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// core components

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

toast.configure()

function SignupPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [secondFocus, setSecondFocus] = React.useState(false);
  const [thirdFocus, setThirdFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [fourthFocus, setFourthFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    // window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const history = useHistory()
  const [firstName,setfirstName] = useState("")
  const [lastName,setlastName] = useState("")
  const [fullName,setfullName] = useState("")
  const [city,setCity] = useState("")
  const [gender,setGender] = useState("")
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [image,setImage] = useState("")
  const [url,setUrl] = useState(undefined)

  useEffect(()=>{
      if(url){
          uploadFields()
      }
  },[url])

  const uploadPic = ()=>{
      const data = new FormData()
      data.append("file", image)
      data.append("upload_preset", "tenouse")
      data.append("cloud_name", "safcloud")
      fetch("https://api.cloudinary.com/v1_1/safcloud/image/upload",{
          method:"post",
          body:data
      })
      .then(res=>res.json())
      .then(data=>{
          //console.log(data)
          setUrl(data.url)
      })
      .catch(err=>{
          console.log(err)
      })
  }

  const uploadFields = ()=>{
      // Email Regex : http://emailregex.com/
      if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        toast.error("Invalid Email", {
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
      // setfullName(firstName + " " + lastName)
      fetch("/signup", {
          method:"post",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              firstName,
              lastName,
              fullName : firstName + " " + lastName,
              city,
              gender,
              password,
              email,
              pic:url
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
              toast.success(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
              history.push('/signin')
          }
      }).catch(err=>{
          console.log(err)
      })
  }

  const PostData = ()=>{

      if(image){
          uploadPic()
      }
      else{
          uploadFields()
      }

      
  }

  return (
    <>
      <IndexNavbar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/house_3.jpg") + ")",
          }}
        ></div>
        <div className="content">
        
          <Container>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div>
                      <img
                        alt="..."
                        src={require("assets/img/TenouseLogo.png")}
                        style={{ height:"120px", width:"120px", marginBottom:"50px" }}
                      ></img>
                    </div>
                  </CardHeader>
                  <CardBody>
                  <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="First Name..."
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                        value={firstName}
                        onChange={(e)=>setfirstName(e.target.value)}
                      ></Input>
                    </InputGroup>

                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (secondFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Last Name..."
                        type="text"
                        onFocus={() => setSecondFocus(true)}
                        onBlur={() => setSecondFocus(false)}
                        value={lastName}
                        onChange={(e)=>setlastName(e.target.value)}
                      ></Input>
                    </InputGroup>


                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (thirdFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email..."
                        type="email"
                        onFocus={() => setThirdFocus(true)}
                        onBlur={() => setThirdFocus(false)}
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                      ></Input>
                    </InputGroup>

                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (thirdFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons location_world"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="City..."
                        type="text"
                        onFocus={() => setFourthFocus(true)}
                        onBlur={() => setFourthFocus(false)}
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}
                      ></Input>
                    </InputGroup>


                    <FormGroup tag="fieldset" style={{ textAlign:"left", marginBottom:"60px" }}>
                      <legend style={{ fontSize:"15px" }}>Gender</legend>
                      <FormGroup check>
                      <Label check>
                          <Input type="radio" name="radio10" value="Male" onChange={(e)=>setGender(e.target.value)} />{'Male'}
                      </Label>
                      </FormGroup>
                      <FormGroup check>
                      <Label check>
                          <Input type="radio" name="radio10" value="Female" onChange={(e)=>setGender(e.target.value)} />{'Female'}
                      </Label>
                      </FormGroup>
                  
                  </FormGroup>

                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_lock-circle-open"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password..."
                        type="password"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                      ></Input>
                    </InputGroup>

                    <Label for="exampleFile">Upload your Pic</Label>
                    <Input style={{ textAlign:"center" }} type="file" name="file" id="exampleFile" onChange={(e)=>setImage(e.target.files[0])} />

                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      size="lg"
                      style={{ marginBottom:"60px" }}
                      onClick={()=>PostData()}
                    >
                      Sign Up
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <Link
                          className="link"
                          to="/signin"
                          
                        >
                          Already have an account?
                        </Link>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default SignupPage;
