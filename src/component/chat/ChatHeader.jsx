import React from 'react'
import {chatList} from './content/data'

function ChatHeader() {
  return (
    <div className='header'>
        <div className="imgText">
            <div className="userimg">
                <img src="https://robohash.org/Terry.png?set=set4" alt="" className='cover'/>
            </div>
            <h4>terry madurest</h4>
        </div>
        <div className="icons">
            <div><i className="bi bi-search"></i></div>
            <div><i className="bi bi-three-dots-vertical"></i></div>
        </div>
      
    </div>
  )
}

export default ChatHeader
