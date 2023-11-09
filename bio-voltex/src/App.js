import React from 'react';
import { Navbar, AnyQuestions , FooterLinks } from './components'
import './App.scss';
import './index.scss';

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <AnyQuestions />
            <FooterLinks />
        </div>
    )
}

export default App