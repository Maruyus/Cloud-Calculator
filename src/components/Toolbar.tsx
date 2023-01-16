import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';

class Toolbar extends React.Component {
    render() {
        return (
            <div className="w-100 bg-emerald-300 position-fixed top-0 bottom-0 w-100 shadow-md h-12 block">
                <nav className="space-y-4 max-w-7xl mx-auto px-5 h-12 flex flex-row items-center">
                    <ul className='flex space-x-8'>
                        <li className='flex'>
                            <a>Home</a>
                        </li>
                        <li className='flex'>
                            <a>History</a>
                        </li>
                        <li className='flex'>
                            <a>About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Toolbar;