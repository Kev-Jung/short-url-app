import "./GetStartedButton.css";

const GetStartedButton = ({ children, className }) => {
  return (
    <button className={`get-started-btn ${className && className}`}>
      {children}
    </button>
  );
};

export default GetStartedButton;
