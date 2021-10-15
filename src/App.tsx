import {
  AmplifyAuthenticator,
  AmplifyGoogleButton,
  AmplifySignIn,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import CourseEditor from './pages/CourseEditor';
import HomePage from './pages/HomePage';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
Amplify.configure(awsconfig);

const useStyles = makeStyles((theme) => ({
  content: {
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
}));

const federated = {
  googleClientId:
    '345987337101-0g8keh99vtuvmkvemivfcij7t4o9pjb7.apps.googleusercontent.com',
};

function App() {
  const classes = useStyles();
  const [authState, setAuthState] = React.useState<AuthState>();
  const [user, setUser] = React.useState<object | undefined>();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
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
  ) : (
    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[{ type: 'email' }, { type: 'password' }]}
      />
      <AmplifySignIn slot="sign-in" federated={federated}>
        <AmplifyGoogleButton
          slot="federated-buttons"
          onClick={() =>
            Auth.federatedSignIn({
              provider: 'Google' as CognitoHostedUIIdentityProvider,
            })
          }
        />
      </AmplifySignIn>
    </AmplifyAuthenticator>
  );
}

export default App;
