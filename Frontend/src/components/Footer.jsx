import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="downPage">
          <div className="row">

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">COMPANY NAME<span></span></h5>
                <p>About the company, little description will go here.</p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">Quick Links<span></span></h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content">
                      <a href="#">&nbsp;Get Started</a>
                    </div>
                  </li>
                  <li>
                    <div className="thumb-content">
                      <a href="#">&nbsp;Top Leaders</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">Follow Us<span></span></h5>
                <a href="#"> <i className="fa fa-facebook"> </i> </a>
                <a href="#"> <i className="fa fa-twitter"> </i> </a>
                <a href="#"> <i className="fa fa-youtube"> </i> </a>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="widget no-box">
                <h5 className="widget-title">Contact Us<span></span></h5>
                <p>Enter the email for any concern</p>
                <div className="emailfield">
                  <input type="text" name="email" value="Email" />
                  <input name="uri" type="hidden" value="arabiantheme" />
                  <input name="loc" type="hidden" value="en_US" />
                  <input className="submitbutton ripplelink" type="submit" value="Subscribe" />
                </div>
              </div>
            </div>

          </div>
        </div>
        
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Copyright Design Sherif Hamdy © 2019. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
     </div>
      </footer>
  );
};

export default Footer;
