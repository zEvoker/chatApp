import './index.scss'
import Sidebar from '../Sidebar'
import Chat from '../Chat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Home = () => {
    const [theme, setTheme] = useState(2);

    const changeTheme = () => {
        setTheme((theme + 1) % 3);
    }

    return (
        <div className="home" style={theme < 2 ? { background: theme === 1 ? 'lightgray' : '#a7bcff' } : null} >
            <FontAwesomeIcon icon={faPalette} color='lightgray' className='chTheme' onClick={changeTheme} />
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
}

export default Home;