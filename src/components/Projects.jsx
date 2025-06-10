import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Projects = () => {

    const { t } = useTranslation();

    return (
        <div className="projects">
            
                <h3>{t('description.projects')} 
                    </h3>
                <Link to="https://github.com/t0mk0us/BankApplication" className="my-link">
                    {t('description.project1')}
                    </Link>
                    <br/>
                    <Link to="https://github.com/t0mk0us/bank-frontend-react"  className="my-link">
                        {t('description.project2')}
                    </Link>
                    <br />
                    <Link to="https://github.com/t0mk0us/algorithms"  className="my-link">                    
                        {t('description.project3')}
                    </Link>
                    <br />
                    <Link to="https://github.com/t0mk0us/microservices"  className="my-link">
                    {t('description.project4')}
                        </Link>
                    <br />
                    <Link to="https://github.com/t0mk0us/loadbalacer"  className="my-link">
                    {t('description.project8')}
                    </Link>
                    <br />
                    <Link to="https://github.com/t0mk0us/shortenurl/tree/master"  className="my-link">
                    {t('description.project9')}
                    </Link>
                    <br />
                    <Link to="https://github.com/t0mk0us/bank-auth0/tree/master"  className="my-link">
                    {t('description.project10')}
                    </Link>
                    <br />
        </div>
    );
}

export default Projects;