# Shortly URL Shortening API Solution

This is my solution to the [Shortly URL Shortening API Landing Page Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G).

[View Live Solution](https://kev-jung.github.io/interactive-card-form/)

## The Challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the form is submitted if:
  - The input field is empty
  - An invalid url is entered
- Bonus Feature: Delete saved links from Local Storage on click

## Built With

- HTML5 markup
- CSS (flexbox, CSS grid)
- ES6 Javascript
- Mobile-first workflow
- React
- Local Storage (for data persistance and memory)
- [ShrtCode - URL shortener API](https://shrtco.de/docs)

## Demo

### Mobile

![mobile-demo](https://user-images.githubusercontent.com/86936720/193942530-6d6b040d-66f0-4dd0-83f8-479628d72e13.gif)

### Desktop

![desktop-demo](https://user-images.githubusercontent.com/86936720/193943353-f3f9cffd-9429-4209-a7f2-e7045e3cf65f.gif)

## My Process

My approach to completing this project was to look at the design files and create components for each section of the landing page. By tackling one component at a time, I was able to complete CSS responsiveness across any dimensions for each component before moving on to the next one.

The challenges I faced for this project were:

- Determining the best data structure to hold state for the API response
  - The app requires two pieces of information when rendering the component responsible for displaying saved links: **original** and **shortened** URL. I opted to use an array of objects with keys representing those two pieces of information for each URL submitted to the API. The intial state had to reference localStorage so that a refresh of the browser did not wipe memory. However, upon loading the app for the first time, localStorage will return `null` which is not iteratable for later reference. Therefore, an empty array is returned if `null` otherwise the parsed localStorage JSON data.

```js
const [urlStorage, setUrlStorage] = useState(() => {
  const getLocalStorage = JSON.parse(localStorage.getItem("url"));
  if (getLocalStorage === null) {
    return [];
  } else {
    return getLocalStorage;
  }
});
```

- Converting/parsing localStorage data to state
  - Since localStorage only accepts strings as its datatype, each time a localStorage method was invoked, JSON.stringify or JSON.parse was required for convert the data in and out of localStorage. An instance of this usage was in the `useEffect` hook. Anytime the state was changed, the localStorage setter function was called using the newly updated state value as the data converted to a JSON string.

```js
useEffect(() => {
  localStorage.setItem("url", JSON.stringify(urlStorage));
}, [urlStorage]);
```

## Helpful Resources

- [Zero To Mastery - Andrei Neagoie](https://zerotomastery.io/courses/learn-react/)
- [React Context & Hooks Tutorial #21 - Adding Local Storage - Net Ninja](https://www.youtube.com/watch?v=SOnMln3W0U8&t=570s)
