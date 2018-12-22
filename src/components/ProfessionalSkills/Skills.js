import React from 'react';
import { Row, Col, Progress } from 'reactstrap';

export default class Skills extends React.Component {
  render() {
    return (
      <div>
        <div id="skills">
          <h2 className="text-center pb-4 font-weight-normal">
            Professional Skills
          </h2>
        </div>
        <div>
          <div className="simple-card">
            <Row>
              <Col xs="12" sm="12" md="6" className="pb-3">
                <Row className="pb-2">
                  <Col xs="6" sm="6" md="6">
                    <span>React JS</span>
                  </Col>
                  <Col xs="6" sm="6" md="6">
                    <span className="float-right">90%</span>
                  </Col>
                </Row>
                <Progress value={90} />
              </Col>
              <Col xs="12" sm="12" md="6" className="pb-3">
                <Row className="pb-2">
                  <Col xs="6" sm="6" md="6">
                    <span>Gatsby JS</span>
                  </Col>
                  <Col xs="6" sm="6" md="6">
                    <span className="float-right">90%</span>
                  </Col>
                </Row>
                <Progress value={90} />
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="12" md="6" className="pb-3">
                <Row className="pb-2">
                  <Col xs="6" sm="6" md="6">
                    <span>Angular 7</span>
                  </Col>
                  <Col xs="6" sm="6" md="6">
                    <span className="float-right">70%</span>
                  </Col>
                </Row>
                <Progress value={70} />
              </Col>
              <Col xs="12" sm="12" md="6" className="pb-3">
                <Row className="pb-2">
                  <Col xs="6" sm="6" md="6">
                    <span>Node JS</span>
                  </Col>
                  <Col xs="6" sm="6" md="6">
                    <span className="float-right">80%</span>
                  </Col>
                </Row>
                <Progress value={80} />
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="12" md="6" className="pb-3">
                <Row className="pb-2">
                  <Col xs="6" sm="6" md="6">
                    <span>Tailwind CSS</span>
                  </Col>
                  <Col xs="6" sm="6" md="6">
                    <span className="float-right">80%</span>
                  </Col>
                </Row>
                <Progress value={80} />
              </Col>
              <Col xs="12" sm="12" md="6" className="pb-3">
                <Row className="pb-2">
                  <Col xs="6" sm="6" md="6">
                    <span>Bootstrap 4</span>
                  </Col>
                  <Col xs="6" sm="6" md="6">
                    <span className="float-right">80%</span>
                  </Col>
                </Row>
                <Progress value={80} />
              </Col>
            </Row>
            <Row>
              <Col xs="12" sm="12" md="6" className="pb-3">
                <Row className="pb-2">
                  <Col xs="6" sm="6" md="6">
                    <span>JavaScript</span>
                  </Col>
                  <Col xs="6" sm="6" md="6">
                    <span className="float-right">80%</span>
                  </Col>
                </Row>
                <Progress value={80} />
              </Col>
              <Col xs="12" sm="12" md="6" className="pb-3">
                <Row className="pb-2">
                  <Col xs="6" sm="6" md="6">
                    <span>MongoDB</span>
                  </Col>
                  <Col xs="6" sm="6" md="6">
                    <span className="float-right">70%</span>
                  </Col>
                </Row>
                <Progress value={70} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
