import React, { useContext } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { CreateClient } from '../pages/CreateClient'
import { UpdateClient } from '../pages/UpdateClient'
import { ElenasContext } from '../contexts/ElenasContext'

export const Routes: React.FC = () => {
  const { isAuth } = useContext(ElenasContext)
  console.log('ISAUTH', isAuth)
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/">
          {!isAuth ? <Redirect to="/login" /> : <Home />}
        </Route>
      </Switch>
      <Route exact path="/client/create">
        {!isAuth ? <Redirect to="/login" /> : <CreateClient />}
      </Route>
      <Route exact path="/client/update/:clientId">
        {!isAuth ? <Redirect to="/login" /> : <UpdateClient />}
      </Route>
    </BrowserRouter>
  )
}
