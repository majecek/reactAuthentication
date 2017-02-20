import React from 'react';
import { Route, IndexRoute} from 'react-router';
import Base from './components/Base';
import HomePage from './components/HomePage';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';

export default (

  <Route path="/" component={Base}>
    <IndexRoute  component={HomePage}/>
    <Route path="/login" component={LoginPage}/>
    <Route path="/signup" component={SignUpPage}/>
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