import React from 'react';
import { Row, Col } from 'reactstrap'
import MindreeLogo from '../../../assets/images/mindtree-logo.png';
import WiproLogo from '../../../assets/images/wipro-logo.jpg';

export default class Experience extends React.Component {
    render() {
        return (
            <div>
                <div id="work-experience">
        <h2 className="text-center pb-4 font-weight-normal">Work Experience</h2>
      </div>
      <Row>
        <Col xs="12" sm="12" md="6">
          <div className="border-card">
            <h5 className="text-center text-primary font-weight-normal pb-2">March 2018 - Present</h5>
            <div className="text-center wipro-logo">
              <img src={MindreeLogo} alt="Mindtree logo" className="img-thumbnail rounded"></img>
            </div>
            <h3 className="text-center font-weight-normal pb-3">Mindtree Limited</h3>
            <p className="text-center">Bangalore, Karnataka</p>
            <hr />
            <h6 className="text-center font-weight-normal pb-4">SENIOR SOFTWARE ENGINEER</h6>
            <p>
              Working as a React JS Developer. I am responsible for design, develop and support various componets in projects throughout all phases of the software development life cycle.
            </p>
          </div>
        </Col>

        <Col xs="12" sm="12" md="6">
          <div className="border-card">
            <h5 className="text-center text-primary font-weight-normal pb-2">November 2018 - February 2018</h5>
            <div className="text-center w-logo">
              <img src={WiproLogo} alt="Wipro logo" className="img-thumbnail rounded"></img>
            </div>
            <h3 className="text-center font-weight-normal pb-3">Wipro Limited</h3>
            <p className="text-center">Bangalore, Karnataka</p>
            <hr />
            <h6 className="text-center font-weight-normal pb-4">PROJECT ENGINEER</h6>
            <p>
              Working as a FULLSTACK Developer. I am responsible for design, develop and support various componets in projects throughout all phases of the software development life cycle.
            </p>
          </div>
        </Col>
      </Row>
            </div>
        )
    }
}