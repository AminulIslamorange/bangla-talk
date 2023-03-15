import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";

import { db } from "../firebase";
import Message from "./Message";
import { ChatContext } from './../context/ChatContext';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsubscribe();
    };
  }, [data.chatId]);

  console.log(messages)

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;