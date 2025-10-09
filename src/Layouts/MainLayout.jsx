import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import Hero from '../Components/Hero';

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;