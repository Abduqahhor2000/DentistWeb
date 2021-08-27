import React from "react";
import { Route, Switch } from 'react-router-dom';
import './App.css';
import routes from "./routes";

function App() {
  return (
    <div className="App">
          <Switch>
              {routes.authAbdu.map(item => {
                return(
                  <Route {...item} path={item.path} />
                )
              })}  
          </Switch>
    </div>
  );
}

export default App;
