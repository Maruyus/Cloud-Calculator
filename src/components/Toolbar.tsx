import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';

class Toolbar extends React.Component {
    render() {
        return (
            <div className="w-100 bg-emerald-300 position-fixed top-0 bottom-0 w-100 shadow-md h-12 block">
                <div className="space-y-4 max-w-7xl mx-auto px-5 h-12 grid items-center">
                    <div className='flex '>
                        <h1>Toolbar goes here</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Toolbar;