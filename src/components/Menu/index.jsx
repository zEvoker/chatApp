import { useContext, useState } from 'react';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { ChatContext } from '../../context/ChatContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

const Menu = () => {
    const [confirm, setConfirm] = useState(false);
    const { data } = useContext(ChatContext);
    const { currentUser } = useContext(AuthContext);

    const handleClear = async () => {
        try {
            const chatDocRef = doc(db, 'chats', data.chatID);
            await updateDoc(chatDocRef, {
                messages: []
            });
            await updateDoc(doc(db, "userChats", currentUser.uid), {
                [data.chatID + ".lastMessage"]: {
                    sender: null,
                    text: null
                }
            });
            await updateDoc(doc(db, "userChats", data.user.uid), {
                [data.chatID + ".lastMessage"]: {
                    sender: null,
                    text: null
                }
            });
            setConfirm(false);
        } catch (error) {
            console.error("Error clearing chat:", error);
        }
    }

    return (
        <div className="menu">
            <ul>
                <li><span>Change theme</span></li>
                {confirm ?
                    <li>
                        <div className="confirmClear">
                            <span>Are you sure?</span>
                            <FontAwesomeIcon icon={faCheckCircle} className='confirmIcon' onClick={handleClear} />
                            <FontAwesomeIcon icon={faXmarkCircle} className='confirmIcon' onClick={() => setConfirm(false)} />
                        </div>
                    </li>
                    :
                    <li onClick={() => { setConfirm(true) }}>
                        <span>Clear chat</span>
                    </li>
                }
            </ul>
        </div>
    )
}

export default Menu;