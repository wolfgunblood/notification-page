import React from 'react';
import "./Notiffication.scss";


const Notification = ({ item }) => {
    const { notif, time, msg, img } = item
    return (
        <div className='notification-component'>
            <img src={img} alt="Avatar"  className='avatar'/>
            <div className='notification-content'>
                <p>{notif}</p>
                <p>{time}</p>
                {msg && <p className='message'>{msg}</p> }
            </div>
        </div>
    )
}

export default Notification