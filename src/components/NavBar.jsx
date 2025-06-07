import { Link } from 'react-router-dom';
/* import { injectIntl, FormattedMessage } from 'react-intl';
import { addLocaleData, IntlProvider } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import taLocaleData from 'react-intl/locale-data/ta'; */

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/experience">
                        Experience
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