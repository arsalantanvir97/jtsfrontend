import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import Header from "./Header";
// import Sidebar from "./Sidebar";
import { useRecoilValue } from 'recoil'
import { userInfo } from '../Recoil'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userData = useRecoilValue(userInfo)
  return (
    <Route
      {...rest}
      render={(props) =>
        !userData ? (
          <Redirect to='/' />
        ) : (
          <>
            {/* <Header {...props}/>
            <Sidebar {...props}/> */}
            <Component {...props} />
          </>
        )
      }
    />
  )
}

export default PrivateRoute
