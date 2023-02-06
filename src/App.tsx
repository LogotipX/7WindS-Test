import React from 'react';
import './App.scss';
import { HeaderPanel, SideNavbar } from './components/index';

function App() {
    return (
        <div className="App">
            <HeaderPanel />
            <SideNavbar />
        </div>
    );
}

export default App;
