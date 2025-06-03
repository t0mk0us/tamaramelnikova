import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about">
                    <FormattedMessage
                        id="Home.aboutMessage"
                        defaultMessage="About" />
                    </Link>
                </li>
                <li>
                    <Link to="/experience">
                    <FormattedMessage
                        id="Home.experienceMessage"
                        defaultMessage="Experience" />
                        </Link>
                </li>
                <li>
                    <Link to="/industries">Industries</Link>
                </li>
                <li>
                    <Link to="/education">Education</Link>
                </li>
                <li>
                    <Link to="/languages">Languages</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;