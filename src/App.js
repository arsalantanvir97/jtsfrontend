import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './Components/PrivateRoute'
import Loader from './Components/Loader'

const Login = lazy(() => import('./Screens/Login'))
const About = lazy(() => import('./Screens/About'))
const Cart = lazy(() => import('./Screens/Cart'))
const Checkout = lazy(() => import('./Screens/Checkout'))
const Comment = lazy(() => import('./Screens/Comment'))
const Contactus = lazy(() => import('./Screens/Contactus'))
const ForgotPassword = lazy(() => import('./Screens/ForgotPassword'))
const Home = lazy(() => import('./Screens/Home'))
const NewPassword = lazy(() => import('./Screens/NewPassword'))
const Merchandise = lazy(() => import('./Screens/Merchandise'))
const News = lazy(() => import('./Screens/News'))
const Signup = lazy(() => import('./Screens/Signup'))
const SingleProduct = lazy(() => import('./Screens/Signup'))
const Support = lazy(() => import('./Screens/Support'))
const Verification = lazy(() => import('./Screens/Verification'))

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router basename='/jsat'>
        <Route path='/' component={Home} exact />
        <Route path='/Login' component={Login} exact />
        <Route path='/About' component={About} exact />
        <Route path='/Cart' component={Cart} exact />
        <Route path='/Checkout' component={Checkout} exact />
        <PrivateRoute path='/Comment' component={Comment} exact />
        <Route path='/Contactus' component={Contactus} exact />
        <Route path='/ForgotPassword' component={ForgotPassword} exact />
        <Route path='/NewPassword' component={NewPassword} exact />
        <Route path='/Merchandise' component={Merchandise} exact />
        <Route path='/News' component={News} exact />
        <Route path='/Signup' component={Signup} exact />
        <Route path='/SingleProduct' component={SingleProduct} exact />
        <PrivateRoute path='/Support' component={Support} exact />
        <Route path='/Verification' component={Verification} exact />
      </Router>
    </Suspense>
  )
}

export default App
