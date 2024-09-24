import React from 'react';
import PageRouter from '../Common/PageRouter';
import Navbar from './Navbar';
import About from '../Common/Components/About';
import Services from '../Common/Components/Services';
import CTA from '../Common/Components/CTA';
import Client from '../Common/Components/Client';
import Works from '../Common/Components/Works';
import Blog from '../Common/Components/Blog';
import ContactUs from '../Common/Components/ContactUs';
import Footer from './Footer';

const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <About />
      <Services />
      <CTA />
      <Client />
      <Works />
      <Blog />
      <ContactUs />
      <Footer />
    </>
  );
};

export default PageRouter(Layout);
