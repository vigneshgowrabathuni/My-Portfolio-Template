import React from 'react';
import Slider from 'react-slick';
import ReactLogo from '../../../assets/images/react-logo.png';
import AngularLogo from '../../../assets/images/angular-logo.png';
import NodeJSLogo from '../../../assets/images/node-logo.png';
import MongoLogo from '../../../assets/images/mongo-logo.png';
import BloggerLogo from '../../../assets/images/blogger-logo.png';
import BootstrapLogo from '../../../assets/images/bootstrap-logo.png';
import ContentfulLogo from '../../../assets/images/contentful-logo.png';
import ExpressLogo from '../../../assets/images/express-logo.png';
import JsLogo from '../../../assets/images/js-logo.png';
import TailwindLogo from '../../../assets/images/tailwind-logo.jpg';
import GatsbyLogo from '../../../assets/images/gatsby-logo.png';

export default class WorkedOn extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      nextArrow: '',
      prevArrow: '',
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            className: 'center',
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            className: 'center',
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };
    return (
      <div>
        <div>
          <h2 className="text-center pb-4 pt-5 font-weight-normal">
            Worked On
          </h2>
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <img
                src={ReactLogo}
                alt="ReactJS logo"
                width="140"
                className="rounded"
              />
            </div>
            <div style={{ padding: '10px' }}>
              <img
                src={GatsbyLogo}
                alt="GatsbyJS logo"
                width="80"
                className="rounded"
              />
            </div>
            <div>
              <img
                src={AngularLogo}
                alt="AngularJS logo"
                width="100"
                className="rounded"
              />
            </div>
            <div>
              <img
                src={NodeJSLogo}
                alt="NodeJS logo"
                width="200"
                className="rounded"
              />
            </div>
            <div className="pt-4">
              <img
                src={ExpressLogo}
                alt="Express logo"
                width="200"
                className="rounded"
              />
            </div>
            <div className="pt-3">
              <img
                src={MongoLogo}
                alt="Mongo logo"
                width="200"
                className="rounded"
              />
            </div>
            <div>
              <img src={JsLogo} alt="JS logo" width="150" className="rounded" />
            </div>
            <div>
              <img
                src={BootstrapLogo}
                alt="Bootstrap logo"
                width="200"
                className="rounded"
              />
            </div>
            <div>
              <img
                src={TailwindLogo}
                alt="Tailwind logo"
                width="80"
                className="img-thumbnail rounded-circle"
              />
            </div>
            <div>
              <img
                src={BloggerLogo}
                alt="Blogger logo"
                width="80"
                className="rounded-circle"
              />
            </div>
            <div>
              <img
                src={ContentfulLogo}
                alt="Contentful logo"
                width="140"
                className="rounded-circle"
              />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
