import { signOut } from 'firebase/auth';
import './index.scss'
import { auth } from '../../firebase';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div className="navbar">
            <span className='logo'>ChatApp</span>
            <div className='user'>
                <img src={currentUser.photoURL} alt='' />
                <span>{currentUser.displayName}</span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} color="lightgray" size='2x' style={{ height: "20px", cursor: "pointer" }} onClick={() => signOut(auth)} />
            </div>
        </div>
    )
}

export default Navbar;