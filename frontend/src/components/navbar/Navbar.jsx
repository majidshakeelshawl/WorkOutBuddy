import { Link } from 'react-router-dom';
import { useLogOut } from '../../hooks/useLogOut';
import { useAuthContext } from '../../hooks/useAuth.context';

const Navbar = () => {
    const { logout } = useLogOut();
    const handleClick = () => {
        logout();
    }

    const { user } = useAuthContext();

    return (
        <header>
            <div className="container">
                <Link to='/'>
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    {user &&
                        (
                            <div>
                                <span className='logged-in-user-email-nav'>{user.email}</span>
                                <button onClick={handleClick}>Log Out</button>
                            </div>
                        )
                    }

                    {!user &&
                        (
                            <div>
                                <Link to='/login'>Log In</Link>
                                <Link to='/signup'>Sign Up</Link>
                            </div>
                        )
                    }
                </nav>
            </div>
        </header>
    )
}

export default Navbar;