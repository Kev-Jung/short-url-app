import "./SavedLinks.css";
import Button from "../Button/Button";

const SavedLinks = ({ originalUrl, shortenUrl }) => {
  console.log(originalUrl);
  return (
    <div className="saved-links-container">
      <span className="delete-url-btn">&#x2715;</span>
      <div className="original-url-container">
        <span className="original-url">{originalUrl}</span>
      </div>
      <div className="short-url-container">
        <span className="shorten-url">{shortenUrl}</span>
        <Button className="copy-btn">Copy</Button>
      </div>
    </div>
  );
};

export default SavedLinks;
