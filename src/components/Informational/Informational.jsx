import InfoBox from "../InfoBox/InfoBox";
import "./Informational.css";
import brandRecognitionSVG from "../../images/icon-brand-recognition.svg";
import detailedRecordsSVG from "../../images/icon-detailed-records.svg";
import fullyCustomizableSVG from "../../images/icon-fully-customizable.svg";

const Informational = () => {
  return (
    <div id="informational">
      <div className="informational-prompt">
        <h3>Advanced Statistics</h3>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="info-boxes-container">
        <div className="arrow" />
        <InfoBox
          title="Brand Recognition"
          img={brandRecognitionSVG}
          className="space-up"
        >
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </InfoBox>
        <InfoBox title="Detailed Records" img={detailedRecordsSVG}>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </InfoBox>
        <InfoBox
          title="Fully Customizable"
          img={fullyCustomizableSVG}
          className="space-down"
        >
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </InfoBox>
      </div>
    </div>
  );
};

export default Informational;
