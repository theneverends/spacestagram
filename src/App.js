import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [like, setLike] = useState("like1");
  const [page, setPage] = useState(0);
  const camera = {
    FHAZ: "Front Hazard Avoidance Camera",
    RHAZ: "Rear Hazard Avoidance Camera",
    MAST: "Mast Camera",
    CHEMCAM: "Chemistry and Camera Complex",
    MAHLI: "Mars Hand Lens Imager",
    MARDI: "Mars Descent Imager",
    NAVCAM: "Navigation Camera",
    PANCAM: "Panoramic Camera",
    MINITES: "Miniature Thermal Emission Spectrometer (Mini-TES)",
  };
  let map;
  let likeList = [];

  //listener to like button
  const likeListener = (event) =>
    like === "like1" ? setLike("like2") : setLike("like1"); //setLike(true);

  //
  const viewSlides = (x) => setPage(page + x);

  //render at the beginning
  useEffect(async () => {
    setIsLoading(true);
    await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=UzSgl1dG6wqfUUp3oSeinvDyZQDL0g58fyRRKQiN&count=5"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let s = JSON.stringify(data);
        console.log(s);
        //s = s.substring(17, s.length - 1);
        map = JSON.parse(s);
        setValue(map);
        setIsLoading(false);
      });
  }, []);

  //Map through the list
  const List = (array) => {
    return array.list.map((item) => (
      <div className="container">
        <h4>{item.title}</h4>
        <h7>on {item.date}</h7>
        <div className="imgContainer">
          <img align="left" src={item.hdurl} alt="oops" className="responsive"/>
          <div className="top-right">
            <button className={like} onClick={likeListener}>
              <i class="fas fa-heart"></i>
            </button>
          </div>
          <div className="prev" >
            <a onclick={() => viewSlides(-1)}>&#10094;</a>
          </div>
          <div className="next">
            <a  onclick="plusSlides(1)">&#10095;</a>
          </div>
        </div>  
      </div>
    ));
  };

  //display each image
  const Item = ({ item }) => {};

  return (
    <div className="App">
      <h3>Spacestagram</h3>
      <List list={value} />
    </div>
  );
}

export default App;
