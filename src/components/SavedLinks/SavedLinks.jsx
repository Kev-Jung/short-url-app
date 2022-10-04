import "./SavedLinks.css";
import Button from "../Button/Button";
import { useState } from "react";

const SavedLinks = ({ id, deleteUrlFromLocalStorage, original, shortened }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboardHandler = () => {
    navigator.clipboard.writeText(shortened);
    setIsCopied(!isCopied);
  };

  const deleteUrlHandler = () => {
    deleteUrlFromLocalStorage(id);
  };

  return (
    <div className="saved-links-container">
      <span onClick={deleteUrlHandler} className="delete-url-btn">
        &#x2715;
      </span>
      <div className="original-url-container">
        <span className="original-url">{original}</span>
      </div>
      <div className="short-url-container">
        <span className="shorten-url">{shortened}</span>
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
