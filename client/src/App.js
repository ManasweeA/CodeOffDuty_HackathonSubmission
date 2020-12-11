
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




export const UserContext = createContext()

const Routing = ()=>{
  
  return(
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
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
