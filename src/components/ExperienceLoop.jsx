import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
/* import { injectIntl, FormattedMessage } from 'react-intl';
import { addLocaleData, IntlProvider } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import taLocaleData from 'react-intl/locale-data/ta'; */

const ExperienceLoop = () => {

    const { t } = useTranslation();

/* Example from Stack Owerflow
const rows = [];
for (let i = 0; i < numrows; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<ObjectRow key={i} />);
}

return <tbody>{rows}</tbody>; */

//Recommended method for List Rendering, 
//to loop through list items using map

const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Français' }
  };

{Object.keys(lngs).map((lng) => (
    <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
      {lngs[lng].nativeName}
    </button>
    ))}

    const items = ['Item 1', 'Item 2', 'Item 3'];
    
function ExperiencesList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

}

export default ExperienceLoop;