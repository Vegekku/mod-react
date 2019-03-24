import React from 'react'
import {Switch, Route} from 'react-router'

import Collections from './Collections'
import Detail from './Detail'

export default props =>
  <Switch>
    <Route exact path='/' component={Collections} />
    <Route exact path='/movie/:movie_id' component={Detail} />
    <Route component={props => <p>Error 404</p>} />
  </Switch>