import React from 'react';
import { Row, Col, Progress } from 'reactstrap'
import UdemyLogo from '../../../assets/images/udemy-logo.png';
import IBMLogo from '../../../assets/images/ibm-logo.png';
import CollegeLogo from '../../../assets/images/college-logo.png';

export default class Certifications extends React.Component {
    render() {
        return (
            <div>
                <div>
        <h2 className="text-center pb-4 pt-5 font-weight-normal">Certifications</h2>
      </div>
      <div>
        <Row>
          <Col xs="12" sm="12" md="3">
            <div className="certificate-card">
            <h5 className="text-center font-weight-normal pb-3">Angular 6</h5>
              <h6 className="text-center font-weight-normal pb-2">License UC-N32PQ5JT</h6>
              <hr />
              <div className="text-center udemy-logo">
                <img src={UdemyLogo} alt="Udemy logo" className="img-thumbnail rounded"></img>
              </div>
              <h4 className="text-center font-weight-normal pb-3 pt-2">Udemy</h4>
            </div>
          </Col>
          <Col xs="12" sm="12" md="3">
            <div className="certificate-card">
            <h5 className="text-center font-weight-normal pb-3">Microsoft Azure Solutions</h5>
              <h6 className="text-center font-weight-normal pb-2">License UC-74BW3UAK</h6>
              <hr />
              <div className="text-center udemy-logo">
                <img src={UdemyLogo} alt="Udemy logo" className="img-thumbnail rounded"></img>
              </div>
              <h4 className="text-center font-weight-normal pb-3 pt-2">Udemy</h4>
          </div>
          </Col>
          <Col xs="12" sm="12" md="3">
            <div className="certificate-card">
            <h5 className="text-center font-weight-normal pb-3">IBM CLOUD</h5>
              <h6 className="text-center font-weight-normal pb-2">License IBM000148674</h6>
              <hr />
              <div className="text-center ibm-logo">
                <img src={IBMLogo} alt="IBM logo" className="img-thumbnail rounded"></img>
              </div>
              <h4 className="text-center font-weight-normal pb-3 pt-2">IBM</h4>
          </div>
          </Col>
          <Col xs="12" sm="12" md="3">
            <div className="certificate-card">
              <h5 className="text-center font-weight-normal pb-3">Diploma in Computer Apps</h5>
              <h6 className="text-center font-weight-normal pb-2">License J1/19239/2004</h6>
              <hr />
              <div className="text-center w-logo">
                <img src={CollegeLogo} alt="College logo" className="img-thumbnail rounded"></img>
              </div>
              <h4 className="text-center font-weight-normal pb-3 pt-2">SiCE</h4>
            </div>
          </Col>
        </Row>

      </div>
            </div>
        )
    }
}