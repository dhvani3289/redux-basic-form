import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <>
            <div className="header">
                <Link to="/">ADD CONTACT</Link>
                <Link to="/viewContact">VIEW CONTACT</Link>
            </div>
        </>
    )
}

export default Header;