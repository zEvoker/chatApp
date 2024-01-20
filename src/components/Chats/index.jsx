import './index.scss'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { ChatContext } from '../../context/ChatContext';

const Chats = () => {
    const [chats, setChats] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });
            return () => {
                unsub();
            };
        };
        currentUser.uid && getChats();
    }, [currentUser.uid]);

    const handleSelect = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u });
    }

    const formatDateTime = (timestamp) => {
        if (!timestamp || !timestamp.seconds) {
            return '';
        }
        const messageDate = new Date(timestamp.seconds * 1000);
        const today = new Date();

        if (
            messageDate.getDate() === today.getDate() &&
            messageDate.getMonth() === today.getMonth() &&
            messageDate.getFullYear() === today.getFullYear()
        ) {
            // If the message was sent today, show time
            return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } else {
            // If the message was sent on a different day, show date
            return messageDate.toLocaleDateString();
        }
    };

    return (
        <div className='chats'>
            {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
                <div className='userChat' key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
                    <img src={chat[1].userInfo.photoURL} alt="avatar" />
                    <div className="userChatInfo">
                        <div className="namedate">
                            <span>{chat[1].userInfo.displayName}</span>
                            <p>{formatDateTime(chat[1]?.date)}</p>
                        </div>
                        <p>{chat[1].lastMessage?.sender === currentUser.displayName ? "you: " : ""}{chat[1].lastMessage?.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Chats