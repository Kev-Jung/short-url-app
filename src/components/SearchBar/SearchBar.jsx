import Button from "../Button/Button";
import "./SearchBar.css";
import shortenMobileBackground from "../../images/bg-shorten-mobile.svg";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const SearchBar = ({ urlStorage, setUrlStorage }) => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });
  const { isError, errorMessage } = error;

  const setUrlHandler = (e) => {
    setOriginalUrl(e.target.value);
  };

  const resetSearchBar = () => {
    setOriginalUrl("");
    setError({
      isError: false,
      errorMessage: "",
    });
  };

  const fetchAPI = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${originalUrl}`
      );
      const { result } = await response.json();
      const shortUrl = result.full_short_link;
      setUrlStorage([
        ...urlStorage,
        { id: uuid(), original: originalUrl, shortened: shortUrl },
      ]);
      resetSearchBar();
    } catch (err) {
      originalUrl.length === 0
        ? setError({ isError: true, errorMessage: "Please add a link" })
        : setError({
            isError: true,
            errorMessage: "Please type a valid link",
          });
    }
  };

  return (
    <form onSubmit={fetchAPI} className="searchbar-container">
      <img
        className="searchbar-background"
        src={shortenMobileBackground}
        alt="searchbar-background"
      />
      <div className="input-field-container">
        <input
          onChange={setUrlHandler}
          className={`input-field ${isError && "error"}`}
          type="text"
          value={originalUrl}
          placeholder="Shorten a link here..."
        />
        <span className="error-message">{errorMessage}</span>
      </div>
      <Button className="shorten-btn">Shorten It!</Button>
    </form>
  );
};

export default SearchBar;
