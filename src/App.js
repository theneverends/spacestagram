import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [like, setLike] = useState("like1");
  let page = 0;
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
  const likeListener = (event, item) => {
    if (like === "like1"){
      setLike("like2");
      likeList.push(item);
    }
    else {
      setLike("like1");
      likeList.pop(item);
    }
  }

  //
  const flipPage = (x) => { 
    page += x;
    console.log(page);
  }

  //render at the beginning
  useEffect(async () => {
    setIsLoading(true);
    await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=UzSgl1dG6wqfUUp3oSeinvDyZQDL0g58fyRRKQiN&count=10"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let s = JSON.stringify(data);
        //s = s.substring(17, s.length - 1);
        map = JSON.parse(s);
        setValue(map);
        setIsLoading(false);
      });
  }, [page]);

  //Map through the list
  const List = (array) => {
    return (
      <div className="container">
        {/*slide1*/}
        <div className="slide">
          <h4>{array.list[page].title}</h4>
          <h7>on {array.list[page].date}</h7>
          <div className="imgContainer">
            <img align="left" src={array.list[page].hdurl} alt="oops" className="responsive"/>
            <div className="top-right">
              <button className={like} onClick={likeListener}>
                <i class="fas fa-heart"></i>
              </button>
            </div>
            <div className="prev" >
              <a onClick={() => flipPage(-1)}>&#10094;</a>
            </div>
            <div className="next">
              <a onClick={() => flipPage(1)}>&#10095;</a>
            </div>
          </div>  
        </div>
        {/*slide2*/}
        <div className="slide">
          <h4>{array.list[page + 1].title}</h4>
          <h7>on {array.list[page + 1].date}</h7>
          <div className="imgContainer">
            <img align="left" src={array.list[page + 1].hdurl} alt="oops" className="responsive"/>
            <div className="top-right">
              <button className={like} onClick={likeListener}>
                <i class="fas fa-heart"></i>
              </button>
            </div>
            <div className="prev" >
              <a onClick={() => flipPage(-1)}>&#10094;</a>
            </div>
            <div className="next">
              <a onClick={() => flipPage(1)}>&#10095;</a>
            </div>
          </div>  
        </div>
        {/*slide3*/}
        <div className="slide">
          <h4>{array.list[page + 2].title}</h4>
          <h7>on {array.list[page + 2].date}</h7>
          <div className="imgContainer">
            <img align="left" src={array.list[page + 2].hdurl} alt="oops" className="responsive"/>
            <div className="top-right">
              <button className={like} onClick={likeListener}>
                <i class="fas fa-heart"></i>
              </button>
            </div>
            <div className="prev" >
              <a onClick={() => flipPage(-1)}>&#10094;</a>
            </div>
            <div className="next">
              <a onClick={() => flipPage(1)}>&#10095;</a>
            </div>
          </div>  
        </div>
        {/*slide4*/}
        <div className="slide">
          <h4>{array.list[page + 3].title}</h4>
          <h7>on {array.list[page + 3].date}</h7>
          <div className="imgContainer">
            <img align="left" src={array.list[page + 3].hdurl} alt="oops" className="responsive"/>
            <div className="top-right">
              <button className={like} onClick={likeListener}>
                <i class="fas fa-heart"></i>
              </button>
            </div>
            <div className="prev" >
              <a onClick={() => flipPage(-1)}>&#10094;</a>
            </div>
            <div className="next">
              <a onClick={() => flipPage(1)}>&#10095;</a>
            </div>
          </div>  
        </div>
        {/*slide5*/}
        <div className="slide">
          <h4>{array.list[page + 4].title}</h4>
          <h7>on {array.list[page + 4].date}</h7>
          <div className="imgContainer">
            <img align="left" src={array.list[page + 4].hdurl} alt="oops" className="responsive"/>
            <div className="top-right">
              <button className={like} onClick={likeListener}>
                <i class="fas fa-heart"></i>
              </button>
            </div>
            <div className="prev" >
              <a onClick={() => flipPage(-1)}>&#10094;</a>
            </div>
            <div className="next">
              <a onClick={() => flipPage(1)}>&#10095;</a>
            </div>
          </div>  
        </div>
        
      </div>
    );
  };

  //display each image
  const Item = ({ item }) => {};

  return (
    <div className="App">
      <h3>Spacestagram</h3>
      {isLoading ? (<p>Loading ...</p>) : (<List list={value} />)}
    </div>
  );
}

export default App;
