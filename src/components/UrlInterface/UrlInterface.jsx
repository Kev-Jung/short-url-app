import SavedLinks from "../SavedLinks/SavedLinks";
import SearchBar from "../SearchBar/SearchBar";
import "./UrlInterface.css";
import { useState, useEffect } from "react";

const UrlInterface = () => {
  // state to hold both short url and url entered by user
  const [urlStorage, setUrlStorage] = useState(() => {
    // retrieves data stored in localStorage as state value. If empty, localStorage returns "null" which puts a blank array as initial value for state
    const getLocalStorage = JSON.parse(localStorage.getItem("url"));
    if (getLocalStorage === null) {
      return [];
    } else {
      return getLocalStorage;
    }
  });

  // Valid url entered from Searchbar component will update the state, which this useEffect will then set the localStorage as a string after every state change
  useEffect(() => {
    localStorage.setItem("url", JSON.stringify(urlStorage));
  }, [urlStorage]);

  const deleteUrlFromLocalStorage = (id) => {
    const filteredLocalStorage = urlStorage.filter((url) => url.id !== id);
    setUrlStorage(filteredLocalStorage);
  };

  return (
    <div id="url-interface">
      <SearchBar urlStorage={urlStorage} setUrlStorage={setUrlStorage} />
      {urlStorage.map((url) => {
        return (
          <SavedLinks
            key={url.id}
            deleteUrlFromLocalStorage={deleteUrlFromLocalStorage}
            original={url.original}
            shortened={url.shortened}
            id={url.id}
          />
        );
      })}
    </div>
  );
};

export default UrlInterface;
