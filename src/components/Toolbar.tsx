import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';

class Toolbar extends React.Component {
    render() {
        return (
            <div className="Toolbar">
                <div className='space-y-4 w-100 bg-orange-400 shadow'>
                    <h1>Toolbar goes here</h1>
                </div>
            </div>
        )
    }
}

export default Toolbar;