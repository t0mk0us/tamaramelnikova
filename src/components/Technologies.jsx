//import { Link } from 'react-router-dom';
import EmailComponent from './EmailComponent';
import PhoneComponent from './PhoneComponent';
import { useTranslation } from 'react-i18next';

const Technologies = () => {

    const { t } = useTranslation();

    return (
        <div className="techno">
            <p className="h7">
            TECHNOLOGIES
            </p>
            <p className="p1">
                    Java
                    <br />
                    Spring Boot
                    <br />
                    Maven
                    <br />
                    Microservices
                    <br />
                    REST APIs
                    <br />
                    AWS S3 & Lambda
                    <br />
                   Microsoft Azure
                   <br />
                  Cybersecurity
        </p>
        </div>
    );
}

export default Technologies;