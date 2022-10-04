import "./Footer.css";
import { ReactComponent as FacebookIcon } from "../../images/icon-facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../../images/icon-pinterest.svg";
import { ReactComponent as InstagramIcon } from "../../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-container">
        <h3 className="footer-logo">Shortly</h3>
        <div className="footer-group-container">
          <h4 className="footer-group-title">Features</h4>
          <span>Link Shortening</span>
          <span>Branded Links</span>
          <span>Analytics</span>
        </div>
        <div className="footer-group-container">
          <h4 className="footer-group-title">Resources</h4>
          <span>Blog</span>
          <span>Developers</span>
          <span>Support</span>
        </div>
        <div className="footer-group-container">
          <h4 className="footer-group-title">Company</h4>
          <span>About</span>
          <span>Our Team</span>
          <span>Careers</span>
          <span>Contact</span>
        </div>
        <div className="footer-group-container social-media-icons">
          <FacebookIcon />
          <TwitterIcon />
          <PinterestIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
