import { useContext, useEffect, useRef } from 'react'
import './index.scss'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext';

const Message = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" })
    }, [message])

    const formatDateTime = (timestamp) => {
        if (!timestamp || !timestamp.seconds) {
            return '';  // or return some default value
        }
        const messageDate = new Date(timestamp.seconds * 1000);
        const today = new Date();

        if (messageDate.getDate() === today.getDate() && messageDate.getMonth() === today.getMonth() && messageDate.getFullYear() === today.getFullYear()) {
            // If the message was sent today, show time
            return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } else {
            // If the message was sent on a different day, show date
            return messageDate.toLocaleDateString();
        }
    };

    return (
        <div ref={ref} className={`message ${message.senderID === currentUser.uid && "owner"}`}>
            <div className="msgInfo">
                <img src={message.senderID === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt='' />
                <span>{formatDateTime(message.data)}</span>
            </div>
            <div className="msgContent">
                <p>{message.text}</p>
                {message.img && <img src={message.img} alt='' />}
            </div>
        </div>
    )
}

export default Message