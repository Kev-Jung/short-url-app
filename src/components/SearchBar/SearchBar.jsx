import Button from "../Button/Button";
import "./SearchBar.css";
import shortenMobileBackground from "../../images/bg-shorten-mobile.svg";
import { useState } from "react";

const SearchBar = ({
  shortenUrlStorage,
  setShortenUrlStorage,
  originalUrlStorage,
  setOriginalUrlStorage,
}) => {
  const [originalUrl, setOriginalUrl] = useState("");

  const setUrlHandler = (e) => {
    setOriginalUrl(e.target.value);
  };

  const resetSearchBar = () => setOriginalUrl("");

  const fetchAPIHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${originalUrl}`
    );
    const { result } = await response.json();
    setShortenUrlStorage([...shortenUrlStorage, result.full_short_link]);
    setOriginalUrlStorage([...originalUrlStorage, originalUrl]);
    resetSearchBar();
  };

  return (
    <form onSubmit={fetchAPIHandler} className="searchbar-container">
      <img
        className="searchbar-background"
        src={shortenMobileBackground}
        alt="searchbar-background"
      />
      <input
        onChange={setUrlHandler}
        className="input-field"
        type="text"
        value={originalUrl}
        placeholder="Shorten a link here..."
      />
      <Button className="shorten-btn">Shorten It!</Button>
    </form>
  );
};

export default SearchBar;
