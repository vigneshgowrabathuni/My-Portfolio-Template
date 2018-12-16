import React from 'react'
import { Row, Col, Jumbotron, Button, Progress, Container } from 'reactstrap'
import Slider from "react-slick";
import Layout from '../components/layout';
import { ProfessionalSkills } from '../components/ProfessionalSkills';
import { WorkExperience } from '../components/WorkExperience';
import { Education } from '../components/Education';
import { Certifications } from '../components/Certifications';
import { WorkedOn } from '../components/WorkedOn';
import { Contact } from '../components/Contact';



const IndexPage = () => {
  
  return (
    <Layout>
      <Container>
      <Jumbotron>
        <h1 className="text-center">Hi! I'M <span className="font-weight-normal">VIGNESH</span></h1>

      </Jumbotron>
      <div className="text-center p-4" id="resume">
        <Button color="primary">Download Resume</Button>
        <p className="pt-3 pb-3">
          Hello!, I'm Vignesh Gowrabathuni. Full Stack Web Developer<br />
          Experienced Senior Software Engineer with a demonstrated history of working in the information technology and services industry.<br />
          Experienced with design, develop and support various componets in projects throughout all phases of the software development life cycle.<br />
          Certified in Angular 7 and Azure Cloud Solutions from Udemy.
        </p>
      </div>
      <ProfessionalSkills />
      <WorkExperience />
      <Education />
      <Certifications />
      <WorkedOn />
      <Contact />
      </Container>
    </Layout >
  )
}

export default IndexPage
