import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

import Homepage from "./pages/homepage/homepage.component";
import Journal from "./pages/journal/journal.component";
import LogInAndSignUp from "./pages/log-in-and-sign-up/log-in-and-sign-up.component";
import SingleJournal from "./pages/single-journal/single-journal.component";
import AddJournal from "./pages/add-journal/add-journal.component";
import EditJournal from "./pages/edit-journal/edit-journal.component";

import "./App.styles.scss";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/journal" component={Journal} />
          <Route path="/signin" component={LogInAndSignUp} />
          <Route path="/journal/:id" component={SingleJournal} />
          <Route path="/add-journal-entry" component={AddJournal} />
          <Route path="/edit-journal-entry/:id" component={EditJournal} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
