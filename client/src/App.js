import React from 'react';
import { Route, Switch} from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import Journal from "./pages/journal/journal.component";
import LogInAndSignUp from "./pages/log-in-and-sign-up/log-in-and-sign-up.component";

import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/journal" component={Journal} />
        <Route path="/signin" component={LogInAndSignUp} /> 
      </Switch>
    </div>
  );
}

export default App;
