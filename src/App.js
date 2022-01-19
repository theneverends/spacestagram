import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";
import Display from "./Display";

export default function App() {
  const [value, setValue] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [local, setLocal] = useState([]);

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
    loadLocalStorage();
    fetchData();
  }, []);

  function loadLocalStorage(){
    const temp = [];
    let keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++){
        temp.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    setLocal(temp);
  }

  return (
    <div className="all">
      <div className="nav">
        <button className="home" onClick={() => {
          
          return page === 1 ? setPage(0) : null
        }}>Spacestagram</button>
        <button className="collection" onClick={() => {
          loadLocalStorage();
          console.log(local);
          return page === 0 ? setPage(1) : null
        }}>My Collection</button>
      </div>
      
      {/**/}

      { isLoading ? (<div className="loading"></div>) : (page === 0 ? <Display list={value}/> : (local.length === 0 ? <p>Your collection is empty...</p> : <Display list={local}/>)) }
    </div>
  );
}

