import "./InfoBox.css";

const InfoBox = ({ children, title, img, className }) => {
  return (
    <div className={`info-box-container ${className && className}`}>
      <div className="info-box-img-container">
        <img src={img} alt={title} />
      </div>
      <h4 className="info-box-title">{title}</h4>
      <p className="info-box-text">{children}</p>
    </div>
  );
};

export default InfoBox;
