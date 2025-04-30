
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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

    const handleEmailPasswordLogin = (e) => {
        e.preventDefault();
        
        const email = e.target.email.value
        const password = e.target.password.value
        

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {

            })
            .catch(error => {

            })
    }

    return (
        <div className='text-center place-items-center mt-36 '>
            <form onSubmit={handleEmailPasswordLogin} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Login</legend>

                <label className="label">Email</label>
                <input className="input validator" type="email" name='email' required placeholder="mail@site.com" />

                <label className="label">Password</label>
                <input type="password" className="input validator" required name='password' placeholder="Password" minLength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, symbol, uppercase letter" />
                

                <input className='btn btn-neutral mt-5' type="submit" value="submit" />


            </form>
            <button onClick={handleLogin} className="btn btn-primary mt-4">Login with Google</button>
            <br />
            <button onClick={handleGithubLogin} className="btn btn-accent mt-4">Login with Github</button>
        </div>
    );
};

export default Login;