import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../components/Home'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'
import PortfolioId from '../components/PortfolioId'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/portfolio' component={Portfolio} exact/>
                <Route path='/contact' component={Contact} exact/>
                <Route path='/portfolio/:id' component={PortfolioId} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter