import './index.scss'
import Messages from '../Messages'
import Menu from '../Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faArrowLeft, faBars, faCamera, faImage, faPaperPlane, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { AuthContext } from '../../context/AuthContext';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase';
import { v4 as uuid } from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Chat = () => {
    const [txt, setTxt] = useState("");
    const [img, setImg] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);
    const { dispatch } = useContext(ChatContext);

    const handleDown = (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    }
    const handleBack = () => {
        dispatch({ type: "RESET_USER" });
    }
    const handleSend = async () => {
        if (txt === "") return;
        const text = txt;
        setTxt("");
        if (img) {
            const storageRef = ref(storage, uuid());
            const uploadTask = uploadBytesResumable(storageRef, img);
            uploadTask.on(
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatID), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderID: currentUser.uid,
                                data: Timestamp.now(),
                                img: downloadURL,
                            }),
                        });
                    });
                }
            );
        } else {
            await updateDoc(doc(db, "chats", data.chatID), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderID: currentUser.uid,
                    data: Timestamp.now(),
                }),
            });
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatID + ".lastMessage"]: {
                sender: currentUser.displayName,
                text
            },
            [data.chatID + ".date"]: serverTimestamp()
        })
        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatID + ".lastMessage"]: {
                sender: currentUser.displayName,
                text
            },
            [data.chatID + ".date"]: serverTimestamp()
        })

        setImg(null);
    }

    return (
        <div className={`chat ${data.user.uid && "sel"}`}>
            <div className="chatInfo">
                <FontAwesomeIcon icon={faArrowLeft} color='lightgray' size='2x' className='goBack' onClick={handleBack} />
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <FontAwesomeIcon icon={faCamera} color="lightgray" size='2x' className='optionIcon' />
                    <FontAwesomeIcon icon={faAdd} color="lightgray" size='2x' className='optionIcon' />
                    <FontAwesomeIcon icon={faBars} color="lightgray" size='2x' className={`${showMenu ? "activeIcon" : "optionIcon"}`} onClick={() => setShowMenu(!showMenu)} />
                </div>
            </div>
            {showMenu === true && <Menu />}
            <Messages />
            <div className="input">
                <div className='uBox'>
                    <input type="text" required="required" onChange={e => setTxt(e.target.value)} value={txt} onKeyDown={handleDown} />
                    <span>type something...</span>
                    <i></i>
                </div>
                <div className="send">
                    <FontAwesomeIcon icon={faPaperclip} color='lightgray' size='2x' style={{ height: "24px", cursor: "pointer" }} />
                    <input type='file' style={{ display: 'none' }} id='file' onChange={e => setImg(e.target.files[0])} />
                    <label htmlFor='file'>
                        <FontAwesomeIcon icon={faImage} size='2x' color='lightgray' style={{ height: "24px", cursor: "pointer" }} />
                    </label>
                    <button onClick={handleSend}><FontAwesomeIcon icon={faPaperPlane} size='2x' color='#060c21' style={{ height: "24px", cursor: "pointer" }} /></button>
                </div>
            </div>
        </div>
    );
}

export default Chat;