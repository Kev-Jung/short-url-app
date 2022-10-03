import SavedLinks from "../SavedLinks/SavedLinks";
import SearchBar from "../SearchBar/SearchBar";
import "./UrlInterface.css";
import { useState, useEffect } from "react";

const UrlInterface = () => {
  const [originalUrlStorage, setOriginalUrlStorage] = useState(() => {
    return JSON.parse(localStorage.getItem("url")) || [];
  });

  const [shortenUrlStorage, setShortenUrlStorage] = useState(() => {
    return JSON.parse(localStorage.getItem("short-url")) || [];
  });

  useEffect(() => {
    localStorage.setItem("url", JSON.stringify(originalUrlStorage));
  }, [originalUrlStorage]);

  useEffect(() => {
    localStorage.setItem("short-url", JSON.stringify(shortenUrlStorage));
  }, [shortenUrlStorage]);

  return (
    <div className="url-interface-container">
      <SearchBar
        shortenUrlStorage={shortenUrlStorage}
        setShortenUrlStorage={setShortenUrlStorage}
        originalUrlStorage={originalUrlStorage}
        setOriginalUrlStorage={setOriginalUrlStorage}
      />
      {shortenUrlStorage.map((shortenUrl, index) => {
        return (
          <SavedLinks
            key={index}
            shortenUrlInstance={shortenUrl}
            originalUrlInstance={originalUrlStorage[index]}
            index={index}
            setOriginalUrlStorage={setOriginalUrlStorage}
            setShortenUrlStorage={setShortenUrlStorage}
          />
        );
      })}
    </div>
  );
};

export default UrlInterface;
