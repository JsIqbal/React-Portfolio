import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './modules/core/App.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ('bootstrap/dist/css/bootstrap.min.css')
import ('./styles/style.css');
// import ('./styles/all.css');

const div = document.getElementById('root');
const root = ReactDOM.createRoot(div);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);