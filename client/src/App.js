/*

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React,{useEffect,createContext,useReducer,useContext} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import SignupPage from "views/examples/SignupPage.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import CreatePost from "views/examples/CreatePost";
import RentProperty from "views/examples/RentProperty";
import FollowingProperty from "views/examples/FollowingProperty";
import HousePriceInfo from "views/examples/HousePriceInfo";
import PropertyDetailedPage from "views/examples/PropertyDetailedPage";
import RoommatePost from "views/examples/RoommatePost";
import FindRoommates from "views/examples/FindRoommates";
import Messages from "views/examples/Messages";
import Premium from "views/examples/Premium";
import Donate from "views/examples/Donate";

import {reducer,initialState} from './reducers/userReducer'
import UserProfilePage from 'views/examples/UserProfile';

export const UserContext = createContext()

const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)

  //Checking if user is signed in
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    //console.log(typeof(user), user)
    if(user){
      dispatch({type:"USER",payload:user})
      //history.push('/')
    }
    else{
      history.push('/signin')
    }
  },[])
  return(
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          exact path="/profile"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/signup"
          render={(props) => <SignupPage {...props} />}
        />
        <Route
          path="/signin"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          path="/create-post"
          render={(props) => <CreatePost {...props} />}
        />
        <Route
          path="/rent-property"
          render={(props) => <RentProperty {...props} />}
        />
        <Route
          path="/following-property"
          render={(props) => <FollowingProperty {...props} />}
        />
         <Route
          path="/house-price-info"
          render={(props) => <HousePriceInfo {...props} />}
        />
        <Route
          path="/property-detailed-page/:houseid"
          render={(props) => <PropertyDetailedPage {...props} />}
        />
        <Route
          path="/roommate-post"
          render={(props) => <RoommatePost {...props} />}
        />
        <Route
          path="/find-roommates"
          render={(props) => <FindRoommates {...props} />}
        />
        <Route
          path="/messages"
          render={(props) => <Messages {...props} />}
        />
        <Route
          path="/premium"
          render={(props) => <Premium {...props} />}
        />
        <Route
          path="/donate"
          render={(props) => <Donate {...props} />}
        />
        <Route
          path="/profile/:userid"
          render={(props) => <UserProfilePage {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
