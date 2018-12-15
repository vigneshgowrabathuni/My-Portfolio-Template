import React from 'react'
import { Header } from '../Header';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss'


const TemplateWrapper = ({ children }) => (
  <div className='App'>
    <Header />
    <div className='pageContent'>
      {children}
    </div>
    {/* <Footer /> */}
  </div>
);


export default TemplateWrapper;

