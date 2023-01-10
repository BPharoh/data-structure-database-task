import React from 'react';
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div>
            <NavBar />
            <Main />
            <Footer />          
        </div>
    );
};

export default Layout;