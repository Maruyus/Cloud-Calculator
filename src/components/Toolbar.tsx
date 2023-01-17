import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import Home from './Home';
import About from './About';
import History from './History';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

class Toolbar extends React.Component {
    render() {
        return (
            <>
                <div className="w-100 bg-emerald-300 position-fixed top-0 bottom-0 w-100 shadow-md h-12 block">
                    <nav className="space-y-4 max-w-7xl mx-auto px-5 h-12 flex flex-row items-center">
                        <ul className='flex space-x-8'>
                            <li className='flex'>
                                <Link to="/home">Home</Link>
                            </li>
                            <li className='flex'>
                                <Link to="/history">History</Link>
                            </li>
                            <li className='flex'>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Routes>
                    <Route path="/home"
                        element={<Home />}
                    />
                    <Route path="/history"
                        element={<History />}
                    />
                    <Route path="/about"
                        element={<About />}
                    />
                </Routes>
            </>
        )
    }
}

export default Toolbar;