import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import NoMatch from "./components/no-match/no-match.component";

import Homepage from "./pages/homepage/homepage.component";
import Journal from "./pages/journal/journal.component";
import LogInAndSignUp from "./pages/log-in-and-sign-up/log-in-and-sign-up.component";
import SingleJournal from "./pages/single-journal/single-journal.component";
import AddJournal from "./pages/add-journal/add-journal.component";
import EditJournal from "./pages/edit-journal/edit-journal.component";

import "./App.styles.scss";

function App({ isLoggedIn }) {
  return (
    <>
      <div className="main-container">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/signin" component={LogInAndSignUp} />

          {isLoggedIn && (
            <>
              <Route exact path="/journal" component={Journal} />
              <Route path="/journal/:id" component={SingleJournal} />
              <Route path="/add-journal-entry" component={AddJournal} />
              <Route path="/edit-journal-entry/:id" component={EditJournal} />
              <Route component={NoMatch} />
            </>
          )}
          <Route component={NoMatch} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.user.isLoggedIn
  };
};

export default connect(mapStateToProps, {})(App);
