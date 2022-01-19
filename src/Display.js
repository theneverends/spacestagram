import React, { useState } from "react";
import { useEffect } from "react";

//Map through the list
export default function Display (array) {
    const [page, setPage] = useState(0);
    const [like, setLike] = useState(localStorage.getItem(array.list[page].title) === null ? "like1" : "like2"); 

    //listener to like button
    const likeListener = (item, local) => {
        if (like === "like1") {
        setLike("like2");
        localStorage.setItem(item.title, JSON.stringify(item));
        } else {
        setLike("like1");
        localStorage.removeItem(item.title);
        }
    };

    //
    const flipPage = (x, array) => {
        localStorage.getItem(array.list[x + page].title) === null ? setLike("like1") : setLike("like2");
        setPage(x + page);
    };
    
    return (
      <div className="container">
        <div className="title">{array.list[page].title}</div>
        <div className="date">on {array.list[page].date}</div>
        <div className="imgContainer">
          <button className="prev" onClick={() => page > 0 ? flipPage(-1, array) : undefined }>&#10094;</button>
          <img align="left" 
          src={array.list[page].url} 
          alt={"Sorry, this video can't be shown in the image gallery, please go to " 
          + array.list[page].url 
          + " to watch the video."}>
              
          </img>
          <div className="top-right">
            <button className={like} onClick={() => likeListener(array.list[page])}>
              <i className="fas fa-heart fa-lg"></i>
            </button>
          </div>
          
          <button className="next" onClick={() => page < array.list.length - 1 ? flipPage(1, array) : undefined}>&#10095;</button>
        </div>  
        <button className="expand">
            Expand to see explanation of this photo
        </button>
        <div className="p">
            <p>
            {array.list[page].explanation}
            </p>
        </div>
        
      </div>
    );
  };

  