import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import { Home, Navbar, About, AnyQuestions, FooterLinks } from './components'
import './App.scss';
import './index.scss';

const App = () => {
    return (
        <Router>

            <div className='App'>
                <Navbar />
                <Switch>
                    {/* <Home /> */}
                    <Route path='/' exact component={Home} />
                    {/* <AnyQuestions /> */}
                    <Route path='/contact' exact component={AnyQuestions} />
                    {/* <About/> */}
                    <Route path='/about' exact component={About} />
                </Switch>
                <FooterLinks />
            </div>
        </Router>
    )
}

export default App