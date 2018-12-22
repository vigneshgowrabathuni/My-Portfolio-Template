import React from 'react';
import { Row, Col } from 'reactstrap';
import MyPhoto from '../../../assets/images/vignesh.jpg';

export default class About extends React.Component {
  render() {
    return (
      <div className="horizontal-card">
        <Row>
          <Col xs="12" sm="12" md="4">
            <div className="text-center">
              <img src={MyPhoto} alt="Vignesh" />
            </div>
          </Col>
          <Col xs="12" sm="12" md="8">
            <h3 className="font-weight-normal pb-3">
              Hi!
            </h3>
            <h1 >
            I'm <span className="font-weight-normal">Vignesh Gowrabathuni</span>
          </h1>
          <h4 >
           Full Stack Web Developer
          </h4>
            <hr />
            <ul class="profile-list">
                                            <li class="clearfix">
                                                <strong class="title">E-mail</strong>
                                                <span class="cont"><a href="mailto:gsundeep.tech@gmail.com" style={{color: '#9da0a7'}}>vgowrabathuni@gmail.com</a></span>
                                            </li>
                                            <li class="clearfix">
                                                <strong class="title">Phone</strong>
                                                <span class="cont"><a href="tel:+918977061710" style={{color: '#9da0a7'}}>+91 8686962112</a></span>
                                            </li>
                                            <li class="clearfix">
                                                <strong class="title">Address</strong>
                                                <span class="cont">#227, 7th Cross Ashwath Nagar, Marathahalli, Bangalore, Karnataka-560037</span>
                                            </li>
                                            <li class="clearfix">
                                                <strong class="title">Languages</strong>
                                                <span class="cont">English, Telugu, Hindi</span>
                                            </li>
                                            <li class="clearfix">
                                                <strong class="title">Date of Birth</strong>
                                                <span class="cont"><i class="rsicon rsicon-calendar"></i>July 28, 1994</span>
                                            </li>
                                        </ul>
          </Col>
        </Row>
      </div>
    );
  }
}
