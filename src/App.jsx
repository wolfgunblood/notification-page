import React from 'react';
import "./App.scss"
import data from './components/data/data';
import Notification from './components/Notification/Notification';

const App = () => {

  console.log(data);

  return (
    <div className='notification-container'>
      <div className='notification-header'>
        <div className='notification-header-left'>
          <h3>Notifications</h3>
          <button className='btn'>3</button>
        </div>
        <p className='notification-header-right'>Mark all as read</p>
      </div>
      <div className='notification-body'>
        {data.map((item, index) => (
          <Notification item= {item} key={index} />
        ))}
            
      </div>
    </div>
  )
}

export default App