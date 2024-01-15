import './index.scss'
import Message from '../Message'
import { useContext, useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { ChatContext } from '../../context/ChatContext';

const Messages = () => {
    const { data } = useContext(ChatContext);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "chats", data.chatID), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });
        return () => {
            unsub();
        }
    }, [data.chatID])

    return (
        <>
            <div className="messages">
                {messages.map((m) => (
                    <Message message={m} key={m.id} />
                ))}
            </div>
        </>
    )
}

export default Messages