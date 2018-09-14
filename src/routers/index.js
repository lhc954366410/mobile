import React from 'react'
import {BrowserRouter, Switch, Route, } from 'react-router-dom'
import Index from '../pages'
import Category from '../pages/category'
import Goodslist from '../pages/goodslist'



const RouterApp = (props) => {
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/index" component={Index} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/goodslist" component={Goodslist} />
            <Route exact path="/goodslist/:Code/:searchText/:Brand" component={Goodslist} />

        </Switch>
    </BrowserRouter>

    )
}

export default RouterApp