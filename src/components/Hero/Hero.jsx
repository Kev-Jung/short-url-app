import "./Hero.css";
import heroImage from "../../images/illustration-working.svg";
import GetStartedButton from "../GetStartedButton/GetStartedButton";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-img-container">
        <img className="hero-img" src={heroImage} alt="" />
      </div>
      <div className="hero-cta-container">
        <div className="hero-cta-prompt">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <GetStartedButton className="cta-btn">Get Started</GetStartedButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
