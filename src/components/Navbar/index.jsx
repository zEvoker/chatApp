import { signOut } from 'firebase/auth';
import './index.scss'
import { auth } from '../../firebase';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className="navbar">
            <span className='logo'>NITChat</span>
            <div className='user'>
                <img src={currentUser.photoURL} alt='' />
                <span>{currentUser.displayName}</span>
                <button onClick={() => signOut(auth)}>logout</button>
            </div>
        </div>
    )
}

export default Navbar;