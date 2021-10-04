import { withAuthenticator } from "@aws-amplify/ui-react";
import { makeStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import CourseEditor from "./pages/CourseEditor";
import HomePage from "./pages/HomePage";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

const useStyles = makeStyles((theme) => ({
  content: {
    overflow: "auto",
  },
  appBarSpacer: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Header />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          <Route path="/course-editor">
            <CourseEditor create={true} />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
