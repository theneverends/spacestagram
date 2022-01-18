import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";
import Display from "./Display";

export default function App() {
  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //render at the beginning
  useEffect(() => {
    setIsLoading(true);
    
    async function fetchData() {
      const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=UzSgl1dG6wqfUUp3oSeinvDyZQDL0g58fyRRKQiN&count=10");
      const json = await response.json();
      let map = JSON.parse(JSON.stringify(json));
      setValue(map);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="all">
      <div className="nav">
        <a className="home" href="./">Spacestagram</a>
        <a className="collection" href="#collection">My Collection</a>
      </div>
      { isLoading ? <div className="loading"></div> : <Display list={value} />}
    </div>
  );
}

