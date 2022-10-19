import { useState } from "react";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form className="signup" onSubmit={handleSubmit}>
                <h3>Let's get you on board</h3>
                <label>Email</label>
                <input
                    type='email'
                    onChange={(e) => { setEmail(e.target.value) }}
                    value={email}
                >
                </input>

                <label>Password</label>
                <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                >
                </input>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;