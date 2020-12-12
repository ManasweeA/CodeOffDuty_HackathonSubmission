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


function HousePriceInfo() {
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
    const {state,dispatch} = useContext(UserContext)

    const predictHousePrice = (city_selected, quarter_selected, house_struct_selected, house_type_selected, bhk_selected) =>{
        console.log(city_selected, quarter_selected, house_struct_selected, house_type_selected, bhk_selected)

        fetch('/predicthouseprice',{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                'City':city_selected,
                'Quarter':quarter_selected,
                'HouseStructure':house_struct_selected,
                'HouseType':house_type_selected,
                'BHK':bhk_selected
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result.result)
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
        
        <h1 style = {{ textAlign:"center", marginTop:"60px", marginBottom:"60px" }}>House Price Info</h1>
        
        <Card className="text-center">
        <CardHeader className="mt-2">New Feature</CardHeader>
        <CardBody>
          <CardTitle tag="h4">Predict the Current House Price</CardTitle>
          <CardText>
            With our Machine Learning model, it is now possible to predict the appropriate current price of the property in the particular location at different time of the year.
          </CardText>


        <Form onSubmit={(e)=>{
            e.preventDefault()
            //console.log(e.target)
            //console.log(e.target[0].value)
            predictHousePrice(e.target[0].value, e.target[1].value, e.target[2].value, e.target[3].value, e.target[4].value)
        }}>
            <FormGroup>
            <label htmlFor="exampleFormControlSelect1">City</label>
            <Input id="exampleFormControlSelect1" type="select">
                <option value = "Pune">Pune</option>
                <option value = "Mumbai">Mumbai</option>
                <option value = "Bangalore">Bangalore</option>
                <option value = "Hyderabad">Hyderabad</option>
            </Input>
            </FormGroup>
            <FormGroup>
            <label htmlFor="exampleFormControlSelect2">
                Quarter
            </label>
            <Input id="exampleFormControlSelect2" type="select">
                <option value="1" >1</option>
                <option value="2" >2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </Input>
            </FormGroup>
            <FormGroup>
            <label htmlFor="exampleFormControlSelect3">
                House Structure
            </label>
            <Input id="exampleFormControlSelect3" type="select">
                <option value="Bungalow" >Bungalow</option>
                <option value="Building" >Building</option>
                <option value="Row_House">Row_House</option>
            </Input>
            </FormGroup>
            <FormGroup>
            <label htmlFor="exampleFormControlSelect4">
                House Type
            </label>
            <Input id="exampleFormControlSelect4" type="select">
                <option value="Furnished" >Furnished</option>
                <option value="Unfurnished" >Unfurnished</option>
            </Input>
            </FormGroup>
            <FormGroup>
            <label htmlFor="exampleFormControlSelect5">
                BHK
            </label>
            <Input id="exampleFormControlSelect5" type="select">
                <option value="1" >1</option>
                <option value="2" >2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </Input>
            </FormGroup>

            <Button color="info" type="submit">
            Predict
          </Button>

          {data?
          <>
          <h3 style={{ marginTop:"30px" }}>Predicted Price</h3>
          <h1>{ 'Rs ' + data + '/month' }</h1>
          </>
          :
          <>
          </>
          
          
          }
            
        </Form>

        </CardBody>
        <CardFooter className="text-muted mb-2">Tenouse Team</CardFooter>
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

export default HousePriceInfo;
