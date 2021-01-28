import React from 'react';
import ReactDOM from 'react-dom';
import css from './index.css';
function MediaCard(profilePic, title, imgUrl, time, body,) {
  return
  <div className="root">
    <div className ="header">
      <div className="profilepic" src={profilePic}></div>
      <div className="title" src={title}></div>
      <div className="time" src={time}></div>


    </div>
    <div className="frame">


    <p className="body" src={body}></p>
    <img className="img" src={imgUrl}></img>
    </div>


  </div>

}
// ReactDOM.render()






ReactDOM.render(<MediaCard  profilePic ="./img/facebook.png" title ="React-Fb" time={new Date().toLocaleTimeString()}
 body="kiya likho is me ?" imgUrl="./img/facebook-5-stars.gif"    />,
  document.getElementById('root')
);

// reportWebVitals();
