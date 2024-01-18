import './index.scss';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db, storage } from "../../firebase"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Load from '../Load';

const Login = () => {
    const [data, setData] = useState({ uname: '', mail: '', pswd: '' });
    const [file, setFile] = useState();
    const [isRegistered, setIsRegistered] = useState(true);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputs = (event) => {
        let inputs = { [event.target.name]: event.target.value };
        setData({ ...data, ...inputs });
    }
    const handleImg = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    }
    const handleDown = (event) => {
        if (event.key === 'Enter') {
            if (isRegistered === false) handleSignup();
            else handleSignin();
        }
    }
    const handleSignin = async () => {
        setLoading(true);
        const email = data.mail;
        const pswrd = data.pswd;
        try {
            await signInWithEmailAndPassword(auth, email, pswrd);
            navigate("/");
        } catch (err) {
            setErr(true);
            setLoading(false);
        };
    }
    const handleSignup = async () => {
        setLoading(true);
        const displayName = data.uname;
        const email = data.mail;
        const password = data.pswd;
        const fil = file; // Assuming you have set the file state correctly

        try {

            if (!fil) {
                // Handle the case where no file is selected
                console.error('No file selected for upload.');
                setErr(true);
                return;
            }
            // Create user
            const res = await createUserWithEmailAndPassword(auth, email, password);

            // Create a unique image name
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);

            // Upload the image
            const snapshot = await uploadBytesResumable(storageRef, fil);
            // Get the download URL
            const downloadURL = await getDownloadURL(snapshot.ref);
            // Update profile with display name and photoURL
            await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
            });

            // Create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
            });

            // Create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});

            navigate("/");
        } catch (error) {
            console.error('Signup Error:', error.message);
            setErr(true);
            setLoading(false);
        }
    };


    const handleSwitch = () => {
        setData({ uname: '', mail: '', pswd: '' });
        setFile(null);
        setIsRegistered(!isRegistered);
    }

    return (
        loading === true ?
            <Load />
            :
            isRegistered === true ?
                <div className='loginBody'>
                    <div className='loginBox logg'>
                        <span className='borderline'></span>
                        <div className='loginForm'>
                            <h2>NITChat</h2>
                            <h2>Login</h2>
                            <div className='uBox'>
                                <input type="email" name="mail" value={data.mail} required="required" onChange={event => handleInputs(event)} />
                                <span>Email</span>
                                <i></i>
                            </div>
                            <div className='uBox'>
                                <input type="password" name="pswd" value={data.pswd} required="required" onChange={event => handleInputs(event)} onKeyDown={handleDown} />
                                <span>Password</span>
                                <i></i>
                            </div>
                            <input type="submit" value="Sign in" onClick={handleSignin} />
                            <p>Don't have an account? <span onClick={handleSwitch}>Register</span></p>
                        </div>
                    </div>
                </div>
                :
                <div className='loginBody'>
                    <div className='loginBox'>
                        <span className='borderline'></span>
                        <div className='loginForm'>
                            <h1>NITChat</h1>
                            <h2>Register</h2>
                            <div className='uBox'>
                                <input type="text" name="uname" required="required" value={data.uname} onChange={event => handleInputs(event)} />
                                <span>Username</span>
                                <i></i>
                            </div>
                            <div className='uBox'>
                                <input type="email" name="mail" value={data.mail} required="required" onChange={event => handleInputs(event)} />
                                <span>Email</span>
                                <i></i>
                            </div>
                            <div className='uBox'>
                                <input type="password" name="pswd" value={data.pswd} required="required" onChange={event => handleInputs(event)} onKeyDown={handleDown} />
                                <span>Password</span>
                                <i></i>
                            </div>
                            <input type="file" id="file" style={{ display: "none" }} onChange={event => handleImg(event)} />
                            <label htmlFor="file" style={{ cursor: "pointer" }}>
                                <FontAwesomeIcon icon={faImage} color="#00bcd4" size='2x' />
                                <span>Avatar</span>
                            </label>
                            <input type="submit" value="Sign up" onClick={handleSignup} />
                            {err && <p>Something went wrong!</p>}
                            <p>Already have an account? <span onClick={handleSwitch}>Login</span></p>
                        </div>
                    </div>
                </div>
    );
}

export default Login;