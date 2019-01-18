/*
 * @Author: 李华良
 * @Date: 2019-01-18 17:27:06
 * @Last Modified by: 李华良
 * @Last Modified time: 2019-01-18 17:49:56
 */
import React from 'react'
import {
  Router,
  Switch,
  Route
} from 'react-router-dom'
import Loadable from 'react-loadable'

// todo: rewrite your loading
const Loading = () => (<p>loading...</p>)

const Home = Loadable({ loader: () => import('PAGES/home'), loading: Loading })

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
)
