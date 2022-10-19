import { useState } from "react";

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    console.log(email, ' ', password);

    return (
        <div>
            <form className="login" onSubmit={handleSubmit}>
                <h3>Nice to have you back!</h3>
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LogIn;