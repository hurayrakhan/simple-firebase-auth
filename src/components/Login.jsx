
import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';

const Login = () => {

    const provider = new GoogleAuthProvider();

    return (
        <div className='text-center place-items-center mt-36 '>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input type="password" className="input" placeholder="Password" />

                <button className="btn btn-neutral mt-4">Login</button>
                <button className="btn btn-primary mt-4">Login with Google</button>

            </fieldset>
        </div>
    );
};

export default Login;