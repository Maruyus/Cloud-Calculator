import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import { Dropdown } from 'primereact/dropdown';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Home = () => {
    const locations = [
        {label: 'Europe East', value: 'EUE'},
        {label: 'Europe West', value: 'EUW'},
        {label: 'Europe North', value: 'EUN'},
        {label: 'US East', value: 'USE'},
        {label: 'US West', value: 'USW'},
        {label: 'US Central', value: 'USC'},
        {label: 'Asia', value: 'ASI'},
        {label: 'Africa', value: 'AFR'}
    ]
    let location = 'US West';

    function setCity(value) {
        location = value;
    }

    return (
        <div className="">

            
            <Dropdown value={location} options={locations} onChange={(e) => setCity(e.value)} placeholder="Select a City"/>
 
 
        </div>
    )
}

export default Home;