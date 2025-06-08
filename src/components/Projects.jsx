import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Projects = () => {

    const { t } = useTranslation();

    return (
        <div className="projects">
                <h3>PROJECTS
                    </h3>
                <Link to="https://github.com/t0mk0us/BankApplication" className="my-link">
                        Bank application back-end in Java
                    </Link>
                    <br/>
                    <Link to="https://github.com/t0mk0us/bank-frontend-react"  className="my-link">
                        Bank application front-end in React
                    </Link>
                    <br />
                    <Link to="https://github.com/t0mk0us/algorithms"  className="my-link">                    
                        Algorithms
                        </Link>
                    <br />
                    <Link to="https://github.com/t0mk0us/microservices"  className="my-link">
                        Microservices
                        </Link>
                    <br />                
                    <Link to="https://github.com/t0mk0us/algorithms"  className="my-link">
                        Microsoft Azure
                        </Link>
                    <br />
                    <Link to="https://github.com/t0mk0us/algorithms"  className="my-link">
                    Load Balancer
                    </Link>
                    <br />
                    <Link to="https://github.com/t0mk0us/algorithms"  className="my-link">
                    URL shortener
                    </Link>
                    <br />
                    <Link to="https://github.com/t0mk0us/bank-auth0/tree/master"  className="my-link">
                    Bank App Authorization (OAuth2)
                    </Link>
                    <br />
        </div>
    );
}

export default Projects;