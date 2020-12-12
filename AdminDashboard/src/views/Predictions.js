/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React,{useEffect, useState, useContext} from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Label
} from "reactstrap";




class Predictions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          premiumResult: undefined,
          profitResult: undefined
        };
    }
    setPremiumResult = result => {
        console.log("Setting")
        this.setState({
            premiumResult: result,
            profitResult: undefined
        });
    };
    setProfitResult = result => {
        console.log("Setting")
        this.setState({
        premiumResult: undefined,
        profitResult: result
        });
    };


    predict_premium = async(city_selected, quarter_selected, person_selected)=>{
        console.log("In here")
        console.log(city_selected, quarter_selected, person_selected)
        
        await fetch('/premiumpredict',{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                "city_selected":city_selected,
                "quarter_selected":quarter_selected,
                "person_selected":person_selected
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.setPremiumResult(data.result)
        })
    }

    predict_profit = async(city_selected, quarter_selected)=>{
        console.log("In here")
        console.log(city_selected, quarter_selected)
        
        await fetch('/profitpredict',{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                "city_selected":city_selected,
                "quarter_selected":quarter_selected
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.setProfitResult(data.result)
        })
    }

  render() {
    return (
        
      <>
        <div className="content">

          <Row>
            <Col md="8" style={{ marginLeft:"auto", marginRight:"auto", marginTop:"60px" }}>
              <Card>
              <Form onSubmit={(e)=>{
                        e.preventDefault()
                        // console.log(e.target)
                        // console.log(e.target[0].value)
                        this.predict_premium(e.target[0].value, e.target[1].value, e.target[2].value)
                        // e.target[0].value = ""
                    }}>
                <CardHeader>
                  <h5 className="title">Predict Tenouse Premium Buyers</h5>
                </CardHeader>
                <CardBody>
                  
                      
                     
                    <Row>
                      <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <Label for="exampleSelect1">City</Label>
                        <Input type="select" name="city_select" id="exampleSelect1">
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        </Input>
                    </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <Label for="exampleSelect2">Quarter</Label>
                        <Input type="select" name="quarter_select" id="exampleSelect2">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        </Input>
                    </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="6" >
                      <FormGroup>
                        <Label for="exampleSelect3">Person</Label>
                        <Input type="select" name="person_select" id="exampleSelect3">
                        <option value="Student">Student</option>
                        <option value="Employee">Employee</option>
                        <option value="Self_Employed">Self_Employed</option>
                        <option value="Tourist">Tourist</option>
                        </Input>
                    </FormGroup>
                      </Col>
                    </Row>
                    
                  
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="success" type="submit">
                    Predict
                  </Button>
                </CardFooter>
                </Form>

                {
                    this.state.premiumResult?
                    <>
                    <h4 style={{ paddingTop:"30px", paddingBottom:"30px", textAlign:"center" }}> Prediction Result</h4>
                    <h1 style={{ textAlign:"center", color:"limegreen" }}>{this.state.premiumResult }</h1>
                    </>
                :<h4 style={{ paddingTop:"30px", paddingBottom:"30px", textAlign:"center" }}> Your Result will appear here</h4>
                }
              </Card>



              <Card>
              <Form onSubmit={(e)=>{
                        e.preventDefault()
                        // console.log(e.target)
                        // console.log(e.target[0].value)
                        this.predict_profit(e.target[0].value, e.target[1].value)
                        // e.target[0].value = ""
                    }}>
                <CardHeader>
                  <h5 className="title">Predict Tenouse Profit</h5>
                </CardHeader>
                <CardBody>
                  
                      
                     
                    <Row>
                      <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <Label for="exampleSelect1">City</Label>
                        <Input type="select" name="city_select" id="exampleSelect1">
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        </Input>
                    </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <Label for="exampleSelect2">Quarter</Label>
                        <Input type="select" name="quarter_select" id="exampleSelect2">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        </Input>
                    </FormGroup>
                      </Col>
                    </Row>
                    
                  
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="success" type="submit">
                    Predict
                  </Button>
                </CardFooter>
                </Form>

                {
                    this.state.profitResult ?
                    <>
                    <h4 style={{ paddingTop:"30px", paddingBottom:"30px", textAlign:"center" }}> Prediction Result</h4>
                    <h1 style={{ textAlign:"center", color:"limegreen" }}>{"Rs " + this.state.profitResult }</h1>
                    </>
                :<h4 style={{ paddingTop:"30px", paddingBottom:"30px", textAlign:"center" }}> Your Result will appear here</h4>
                }
              </Card>
            </Col>
            
          </Row>

        </div>
      </>
    );
  }
}

export default Predictions;
