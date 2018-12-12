import React from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import { Header } from '../Header';
import { Footer } from '../Footer';

// code syntax-highlighting theme
// feel free to change it to another one
// import 'prismjs/themes/prism-twilight.css'
import 'bootstrap/dist/css/bootstrap.css';

// main site style
import './index.scss'


const TemplateWrapper = ({ children }) => (
  <div className='App'>
    <Header />
    <div className='pageContent'>
      {children}
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

