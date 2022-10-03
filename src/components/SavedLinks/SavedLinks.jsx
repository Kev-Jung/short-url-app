import "./SavedLinks.css";
import Button from "../Button/Button";
import { useState } from "react";

const SavedLinks = ({ originalUrl, shortenUrl }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboardHandler = () => {
    navigator.clipboard.writeText(shortenUrl);
    setIsCopied(!isCopied);
  };

  return (
    <div className="saved-links-container">
      <span className="delete-url-btn">&#x2715;</span>
      <div className="original-url-container">
        <span className="original-url">{originalUrl}</span>
      </div>
      <div className="short-url-container">
        <span className="shorten-url">{shortenUrl}</span>
        <Button
          onClick={copyToClipboardHandler}
          className={`copy-btn ${isCopied && "highlighted"}`}
        >
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
};

export default SavedLinks;
