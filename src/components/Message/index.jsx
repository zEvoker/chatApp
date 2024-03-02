import { useContext, useEffect, useRef, useState } from 'react'
import './index.scss'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPencil, faTrashAlt, faXmark } from '@fortawesome/free-solid-svg-icons';
import { db } from '../../firebase';
import { arrayRemove, doc, updateDoc } from 'firebase/firestore';

const Message = ({ message }) => {
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    const ref = useRef();
    const [isEditing, setEditing] = useState(false);
    const [editedText, setEditedText] = useState(message.text);

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

    const handleDown = (e) => {
        if (e.key === 'Enter') handleEdit();
    }

    const handleEdit = async () => {
        if (editedText === message.text) return;
        if (editedText === "") return;
        console.log(editedText)
        setEditing(false);
    }

    const handleDel = async () => {
        try {
            await updateDoc(doc(db, 'chats', data.chatID), {
                messages: arrayRemove(message)
            });
        } catch (error) {
            console.error("Error deleting message:", error);
        }
    }

    return (
        <div ref={ref} className={`message ${message.senderID === currentUser.uid && "owner"}`}>
            <div className="msgInfo">
                <img src={message.senderID === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt='' />
                <span>{formatDateTime(message.data)}</span>
            </div>
            <div className="editdel">
                {isEditing ?
                    <div className='editdelicons'>
                        <FontAwesomeIcon icon={faCheck} className='editdelicon' onClick={handleEdit} />
                        <FontAwesomeIcon icon={faXmark} className='editdelicon' onClick={() => { setEditedText(message.text); setEditing(false); }} />
                    </div>
                    :
                    <div className='editdelicons'>
                        <FontAwesomeIcon icon={faPencil} className='editdelicon' onClick={() => setEditing(true)} />
                        <FontAwesomeIcon icon={faTrashAlt} className='editdelicon' onClick={handleDel} />
                    </div>
                }
            </div>
            {isEditing ?
                <input type='text' onChange={e => setEditedText(e.target.value)} value={editedText} onKeyDown={handleDown} />
                :
                <div className="msgContent">
                    <p>{editedText}</p>
                    {message.img && <img src={message.img} alt='' />}
                </div>
            }
        </div>
    )
}

export default Message