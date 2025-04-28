
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../Firebase/firebase.init';

const Login = () => {

    const provider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const handleLogin = () => {

        console.log('hello google')

        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGithubLogin = () => {

        signInWithPopup(auth, GithubProvider)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })

    }

    return (
        <div className='text-center place-items-center mt-36 '>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
                <button onClick={handleLogin} className="btn btn-primary mt-4">Login with Google</button>
                <button onClick={handleGithubLogin} className="btn btn-accent mt-4">Login with Github</button>

            </fieldset>
        </div>
    );
};

export default Login;