import React from 'react';
import { Row, Col } from 'reactstrap'
import PvpsitLogo from '../../../assets/images/Pvpsit-logo.jpg';
import CollegeLogo from '../../../assets/images/college-logo.png';

export default class Education extends React.Component {
    render() {
        return (
            <div>
                <div id="education">
        <h2 className="text-center pb-4 pt-4 font-weight-normal">Education</h2>
      </div>
      <Row>
        <Col xs="12" sm="12" md="6">
          <div className="border-card">
            <h5 className="text-center text-primary font-weight-normal pb-2">October 2011 - March 2015</h5>
            <h3 className="text-center font-weight-normal pb-3">Compoter Science &amp; Engineering</h3>
            <h6 className="text-center font-weight-normal pb-2">BACHELOR OF TECHNOLOGY</h6>
            <hr />
            <div className="text-center pvp-logo">
              <img src={PvpsitLogo} alt="PVPSIT logo" className="img-thumbnail rounded"></img>
            </div>
            <h4 className="text-center font-weight-normal pb-3 pt-2">PVP SIDDHARTHA INSTITUTE OF TECHNOLOGY</h4>
          </div>
        </Col>

        <Col xs="12" sm="12" md="6">
          <div className="border-card">
            <h5 className="text-center text-primary font-weight-normal pb-2">April 2009 - March 2011</h5>
            <h3 className="text-center font-weight-normal pb-3">Intermediate Education</h3>
            <h6 className="text-center font-weight-normal pb-2">MATHS, PHYSICS &amp; CHEMISTRY</h6>
            <hr />
            <div className="text-center w-logo">
              <img src={CollegeLogo} alt="College logo" className="img-thumbnail rounded"></img>
            </div>
            <h4 className="text-center font-weight-normal pb-3 pt-2">BHARATHI JUNIOR COLLEGE</h4>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12" sm="12" md="6">
          <div className="border-card mt-3">
            <h5 className="text-center text-primary font-weight-normal pb-2">June 2005 - March 2009</h5>
            <h3 className="text-center font-weight-normal pb-3">High School</h3>
            <h6 className="text-center font-weight-normal pb-2">SECONDARY SCHOOL EDUCATION</h6>
            <hr />
            <div className="text-center w-logo">
              <img src={CollegeLogo} alt="College logo" className="img-thumbnail rounded"></img>
            </div>
            <h4 className="text-center font-weight-normal pb-3 pt-2">B B H JR COLLEGE</h4>
          </div>
        </Col>

        <Col xs="12" sm="12" md="6">
          <div className="border-card mt-3">
            <h5 className="text-center text-primary font-weight-normal pb-2">April 1999 - May 2005</h5>
            <h3 className="text-center font-weight-normal pb-3"> Primary School</h3>
            <h6 className="text-center font-weight-normal pb-2">PRIMARY SCHOOL EDUCATION</h6>
            <hr />
            <div className="text-center w-logo">
              <img src={CollegeLogo} alt="College logo" className="img-thumbnail rounded"></img>
            </div>
            <h4 className="text-center font-weight-normal pb-3 pt-2">SRI VENKATESWARA CONVENT</h4>
          </div>
        </Col>
      </Row>

            </div>
        )
    }
}