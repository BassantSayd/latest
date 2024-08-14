import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className="card">
      <img className="profile-image" src="/avatar-jessica.jpeg" alt="mm"/>
      <h2 className="name">Jessica Randall</h2>
      <p className="location">London, United Kingdom</p>
      <p className="bio">"Front-end developer and avid reader."</p>
      <a className="button" href="#">GitHub</a>
      <a className="button" href="#">Frontend Mentor</a>
      <a className="button" href="#">LinkedIn</a>
      <a className="button" href="#">Twitter</a>
      <a className="button" href="#">Instagram</a>
    </div>
  );
}

export default App;