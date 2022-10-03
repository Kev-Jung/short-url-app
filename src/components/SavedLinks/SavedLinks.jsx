import "./SavedLinks.css";
import Button from "../Button/Button";
import { useState } from "react";

const findAndRemoveUrl = (storageKey, index, storageStateSetter) => {
  const urlToDelete = JSON.parse(localStorage.getItem(storageKey))[index];
  storageStateSetter((prevStorage) => {
    return prevStorage.filter((url) => url !== urlToDelete);
  });
};

const SavedLinks = ({
  index,
  originalUrlInstance,
  shortenUrlInstance,
  setShortenUrlStorage,
  setOriginalUrlStorage,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboardHandler = () => {
    navigator.clipboard.writeText(shortenUrlInstance);
    setIsCopied(!isCopied);
  };

  const deleteUrlFromLocalStorage = () => {
    findAndRemoveUrl("url", index, setOriginalUrlStorage);
    findAndRemoveUrl("short-url", index, setShortenUrlStorage);
  };

  return (
    <div className="saved-links-container">
      <span onClick={deleteUrlFromLocalStorage} className="delete-url-btn">
        &#x2715;
      </span>
      <div className="original-url-container">
        <span className="original-url">{originalUrlInstance}</span>
      </div>
      <div className="short-url-container">
        <span className="shorten-url">{shortenUrlInstance}</span>
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
