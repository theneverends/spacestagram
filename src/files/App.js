import './App.css';
import React, { useState } from 'react';
import {useEffect} from 'react';

function App() {

  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const camera = {
    FHAZ: 'Front Hazard Avoidance Camera',
    RHAZ: 'Rear Hazard Avoidance Camera',
    MAST: 'Mast Camera',
    CHEMCAM: 'Chemistry and Camera Complex',
    MAHLI: 'Mars Hand Lens Imager',
    MARDI: 'Mars Descent Imager',
    NAVCAM: 'Navigation Camera',
    PANCAM: 'Panoramic Camera',
    MINITES: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
  };
  let map;

  //render at the beginning
  useEffect (async () => {
    setIsLoading(true);
    await fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=UzSgl1dG6wqfUUp3oSeinvDyZQDL0g58fyRRKQiN"
    ).then(response => {
      return response.json();
    })
    .then(data => {
      let s = JSON.stringify(data);
      s = s.substring(17, s.length - 1);
      map = JSON.parse(s);
      setValue(map);
      setIsLoading(false);
    });
  }, []); 

  //Map through the list
  const List = (array) => {
    return array.list.map(item => (
    <div className='photos'>
      <div className='p'>
        <h3>Taken by NASA's {item.rover.name} rover on Mars, with {camera[item.camera.name]}</h3>
        <h7>on {item.earth_date}</h7>
      </div>
      <img src={item.img_src} alt="oops" className='responsive'/>
      <button className='button' >like</button>
    </div>)
    );
  }

  const like = (x) => x.classList.toggle("fa fa-thumbs-down");

  //display each image
  const Item = ({item}) => {
    
  }

  return (
    <div className="App">
      <h1>Spacestagram</h1>
      <button>hello</button>
      <List list={value}/>   
      
    </div>
  );
}

export default App;
