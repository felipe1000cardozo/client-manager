import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import firebase from './firebase';

import Dashboard from './pages/Dashboard';
// import { useState } from 'react';
// import { useEffect } from 'react';

const Routes = () => {
  // const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  // useEffect(() => {
  //   firebase.isInitialized().then((result) => {
  //     setFirebaseInitialized(result);
  //   });
  // }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
