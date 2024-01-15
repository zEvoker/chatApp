import './index.scss'
import Messages from '../Messages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faCamera, faHamburger, faImage, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { AuthContext } from '../../context/AuthContext';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase';
import { v4 as uuid } from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Chat = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);
    const { currentUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    const handleSend = async () => {
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
                text
            },
            [data.chatID + ".date"]: serverTimestamp()
        })
        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatID + ".lastMessage"]: {
                text
            },
            [data.chatID + ".date"]: serverTimestamp()
        })

        setText("");
        setImg(null);
    }

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <FontAwesomeIcon icon={faCamera} color="#00bcd4" size='2x' style={{ height: "24px", cursor: "pointer" }} />
                    <FontAwesomeIcon icon={faAdd} color="#00bcd4" size='2x' style={{ height: "24px", cursor: "pointer" }} />
                    <FontAwesomeIcon icon={faHamburger} color="#00bcd4" size='2x' style={{ height: "24px", cursor: "pointer" }} />
                </div>
            </div>
            <Messages />
            <div className="input">
                <input type='text' placeholder='Type something...' onChange={e => setText(e.target.value)} value={text} />
                <div className="send">
                    <FontAwesomeIcon icon={faPaperclip} size='2x' style={{ height: "24px", cursor: "pointer" }} />
                    <input type='file' style={{ display: 'none' }} id='file' onChange={e => setImg(e.target.files[0])} />
                    <label htmlFor='file'>
                        <FontAwesomeIcon icon={faImage} size='2x' style={{ height: "24px", cursor: "pointer" }} />
                    </label>
                    <button onClick={handleSend}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;