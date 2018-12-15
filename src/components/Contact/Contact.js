import React from 'react';
import FacebookLogo from '../../../assets/images/facebook-logo.png';
import LinkedinLogo from '../../../assets/images/linkedin-logo.png';
import GooglePlusLogo from '../../../assets/images/google-plus-logo.png';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <div id="contact">
                    <h2 className="text-center pb-4 pt-5 font-weight-normal">Contact Me</h2>
                </div>
                <div className="pb-5" >
                    <div className="text-center">
                        <a href="">
                            <img src={FacebookLogo} alt="facebook logo" width="60" className="rounded-circle ml-2 mr-2"></img>
                        </a>
                        <a href="">
                            <img src={LinkedinLogo} alt="linkedin logo" width="60" className=" rounded-circle ml-2 mr-2"></img>
                        </a>
                        <a href="">
                            <img src={GooglePlusLogo} alt="Google plus logo" width="65" className=" rounded-circle ml-2 mr-2"></img>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}