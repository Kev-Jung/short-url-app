import "./Hero.css";
import heroImage from "../../images/illustration-working.svg";
import Button from "../Button/Button";

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
          <Button className="get-started-btn">Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
