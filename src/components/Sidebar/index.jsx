import './index.scss'
import Navbar from '../Navbar'
import Chats from '../Chats'
import { useContext, useState } from 'react';
import { db } from "../../firebase"
import { collection, query, where, serverTimestamp, getDoc, getDocs, doc, setDoc, updateDoc } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);
    const { currentUser } = useContext(AuthContext);

    const handleSearch = async () => {
        const q = query(collection(db, "users"), where("displayName", "==", username));
        try {
            const querySnapshot = await getDocs(q);
            if (querySnapshot.size === 0) {
                setUser(null);
                setErr(true);
            }
            else {
                querySnapshot.forEach((doc) => {
                    setUser(doc.data());
                });
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleKey = e => {
        e.code === "Enter" && handleSearch();
    };

    const handleSelect = async () => {
        //check if chat exists
        const combID = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
        try {
            const res = await getDoc(doc(db, "chats", combID));
            if (!res.exists()) {
                //create chat
                await setDoc(doc(db, "chats", combID), { messages: [] });
                //create user chats
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combID + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combID + ".date"]: serverTimestamp()
                });
                await updateDoc(doc(db, "userChats", user.uid), {
                    [combID + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combID + ".date"]: serverTimestamp()
                });
            }
        } catch (error) {
            console.log(error);
        }
        setUser(null);
        setUsername("");
    }

    return (
        <div className="sidebar">
            <Navbar />
            <div className='search'>
                <div className='searchForm'>
                    <FontAwesomeIcon icon={faSearch} color='lightgray' size='2x' className='maglass' />
                    <input type='text' value={username} placeholder='Find a user' onKeyDown={handleKey} onChange={e => { setErr(false); setUser(null); setUsername(e.target.value) }} />
                </div>
            </div>
            {err &&
                <div className="noUser">
                    <span>No results found for '{username}'</span>
                </div>
            }
            {user && <div className='userChat' onClick={handleSelect}>
                <img src={user.photoURL} alt='' />
                <div className='userChatInfo'>
                    <span>{user.displayName}</span>
                </div>
            </div>}
            <Chats />
        </div>
    );
}

export default Sidebar;