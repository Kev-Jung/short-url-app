import "./Button.css";

const Button = ({ children, className }) => {
  return (
    <button className={`button ${className && className}`}>{children}</button>
  );
};

export default Button;
