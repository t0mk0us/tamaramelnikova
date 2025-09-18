//import { Link } from 'react-router-dom';
import EmailComponent from './EmailComponent';
import PhoneComponent from './PhoneComponent';
import { useTranslation } from 'react-i18next';

const Technologies = () => {

    const { t } = useTranslation();

    return (
        <div className="techno">
            
            <p className="h7">
                {t('description.techskills')} 
            </p>
            <p className="p1">
                    {t('description.techskill1')}        
                    <br />
                    {t('description.techskill2')} 
                    <br />
                    {t('description.techskill3')} 
                    <br />
                    {t('description.techskill4')} 
                    <br />
                    {t('description.techskill5')} 
                    <br />
                    {t('description.techskill6')} 
                    <br />
                   {t('description.techskill7')} 
                   <br />
                  {t('description.techskill8')} 
                  <br />
                  {t('description.techskill9')} 
        </p>
        </div>
    );
}

export default Technologies;