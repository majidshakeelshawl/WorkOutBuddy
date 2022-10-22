import { useState } from "react";
import { useLogIn } from "../hooks/useLogIn";

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogIn();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    }

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
                <button disabled={isLoading} type="submit">Login</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
}

export default LogIn;