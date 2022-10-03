import "./Button.css";

const Button = ({ children, className, ...otherProps }) => {
  return (
    <button {...otherProps} className={`button ${className && className}`}>
      {children}
    </button>
  );
};

export default Button;
