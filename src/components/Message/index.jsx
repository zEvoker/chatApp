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

    return (
        <div ref={ref} className={`message ${message.senderID === currentUser.uid && "owner"}`}>
            <div className="msgInfo">
                <img src={message.senderID === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt='' />
                <span>just now</span>
            </div>
            <div className="msgContent">
                <p>{message.text}</p>
                {message.img && <img src={message.img} alt='' />}
            </div>
        </div>
    )
}

export default Message