import React from 'react';
import { Route, IndexRoute} from 'react-router';
import Base from './components/Base';
import HomePage from './components/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import Auth from './modules/Auth';
import DashboardPage from './containers/DashboardPage';


export default (

  <Route path="/" getComponent={(location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage);
        } else {
          callback(null, HomePage);
        }
      }
    } >
    <IndexRoute  component={HomePage}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/signup" component={SignUpPage}/>
    <Route path="/logout" onEnter={(nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }} />
  </Route>

);
//
// const routes = {
//   // base component (wrapper for the whole application).
//   component: Base,
//   childRoutes: [
//
//     {
//       path: '/',
//       component: HomePage
//     },
//
//     {
//       path: '/login',
//       component: LoginPage
//     },
//
//     {
//       path: '/signup',
//       component: SignUpPage
//     }
//
//   ]
// };
//
// export default routes;