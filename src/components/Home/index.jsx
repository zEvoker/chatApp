import './index.scss'
import Sidebar from '../Sidebar'
import Chat from '../Chat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush, faPalette } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { ChatContext } from '../../context/ChatContext';

const Home = () => {
    const [theme, setTheme] = useState(true);
    const [color, setColor] = useState('lightgray');
    const { data } = useContext(ChatContext);

    return (
        <div className="home" style={theme ? { background: color } : null} >
            <input type="color" value={color} id="favcolor" onChange={e => { setTheme(true); setColor(e.target.value) }} style={{ display: 'none' }} />
            <label for="favcolor"><FontAwesomeIcon icon={faPalette} color='black' className='chTheme' /></label>
            {theme && <FontAwesomeIcon icon={faBrush} color='black' className='resetTheme' onClick={e => setTheme(false)} />}
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
}

export default Home;