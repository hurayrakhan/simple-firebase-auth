
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const provider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
    const [showPass, setShowPass] = useState(false)

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

    const handleEmailPasswordLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value
        const password = e.target.password.value


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='text-center place-items-center mt-36 '>
            <form onSubmit={handleEmailPasswordLogin} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input className="input validator" type="email" name='email' required placeholder="mail@site.com" />

                <label className="label">Password</label>
                <div className='relative'>
                    <input type={showPass ? 'text' : 'password'} className="input validator" required name='password' placeholder="Password" minLength="8"
                        pattern="(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-]).{8,}"
                        title="Must be more than 8 characters, including number, symbol, uppercase letter" />
                    <button onClick={() => setShowPass(!showPass)} className='text-xs absolute right-4 top-3.5'>{showPass ? <FaEyeSlash /> : <FaEye />}</button>
                </div>
                


                <input className='btn btn-neutral mt-5' type="submit" value="submit" />


                <button onClick={handleLogin} className="btn btn-primary mt-4  ">Login with Google</button>

                <button onClick={handleGithubLogin} className="btn btn-accent mt-4 ">Login with Github</button>

            </form>



        </div>
    );
};

export default Login;