import React from 'react';
import Input from './Input';
import Messages from './Messages';
import cam from '../assets/cam.png';
import add from '../assets/add.png';
import more from '../assets/more.png';
import  { useContext } from "react";

import { ChatContext } from './../context/ChatContext';

const Chat = () => {
  const { data } = useContext(ChatContext);
    return (
        <div className="chat">
        <div className="chatInfo">
          <span>{data?.user?.displayName}</span>
          <div className="chatIcons">
            <img src={cam} alt="" />
            <img src={add} alt="" />
            <img src={more} alt="" />
          </div>
        </div>
        <Messages />
        <Input/>
      </div>
    );
};

export default Chat;