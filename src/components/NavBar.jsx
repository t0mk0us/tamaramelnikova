import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
/* import { injectIntl, FormattedMessage } from 'react-intl';
import { addLocaleData, IntlProvider } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import taLocaleData from 'react-intl/locale-data/ta'; */

const NavBar = () => {

    const { t } = useTranslation();

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about">
                        {t('description.about')}
                    </Link>
                </li>
                <li>
                    <Link to="/technologies">
                    {t('description.technologies')}
                        </Link>
                </li>
                <li>
                    <Link to="/experience">
                    {t('description.experience')}
                        </Link>
                </li>
                <li>
                    <Link to="/industries">
                    {t('description.domains')}
                    </Link>
                </li>
                <li>
                    <Link to="/education">
                    {t('description.education')}
                    </Link>
                </li>
                <li>
                    <Link to="/languages">
                    {t('description.languages')}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;