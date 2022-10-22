import { Link } from 'react-router-dom';
import { useLogOut } from '../../hooks/useLogOut';

const Navbar = () => {
    const { logout } = useLogOut();

    const handleClick = () => {
        logout();
    }

    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    <div>
                        <button onClick={handleClick}>Log Out</button>
                    </div>
                    <div>
                        <Link to='/login'>Log In</Link>
                        <Link to='/signup'>Sign Up</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;