import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Routes, Route, useNavigate } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; */
import TelecomLogo from "../images/logos/telecom.jpg";
import BankingLogo from "../images/logos/banking.png";
import RetailLogo from "../images/logos/retaillogo.png";
import EnergyLogo from "../images/logos/energy.png";
import InsuranceLogo from "../images/logos/insurance.png";
import GovernementLogo from "../images/logos/governement.png";

function AboutPage () {

  const { t } = useTranslation();

    return (
        <>
        <table className="texttable" border="0">
          <tbody>
              <tr colSpan="4">
                  <td>
                      <br />
                      </td>
                  <td colSpan='3' align="right" width="90%">
                  <br/>
                  <br/>
                      <div className="section_title">                  
                      {t('description.domains1')} 
                        </div>
                        <br/>
                  <br/>
                  </td>
              </tr>        
                <tr> 
                  <td width="5%" align='right'>
                  <img src={TelecomLogo} alt="Telecom Logo" width="40"/>
                  <br />
                  <br />
                  <p>
                    &nbsp;
                 </p>
                  <img src={EnergyLogo} alt="Energy Logo" width="50"/>
                  <br />
    <br />
                  <img src={InsuranceLogo} alt="Telecom Logo" width="50"/>
                    </td>
                  <td className="textcolumn" align="left" valign="top" width="45%">
                  <b>{t('description.domain1')}</b> 
                  <br />
                  {t('description.domain1_company1')} 
                  <br />
                  {t('description.domain1_company2')} 
                  <br />
                  <br />
                  <b>{t('description.domain4')}</b>
                  <br />
                  {t('description.domain4_company1')}
                  <br />
                  <br />
                    <b>{t('description.domain5')}</b>
                  <br />
                  {t('description.domain5_company1')}
                  <br />         
                  </td>
                  <td width="5%" align='right'>
                  <img src={BankingLogo} alt="Banking Logo" width="50"/>
                  <br />
                  <br />
                  <br />
                  <p>
                 </p>
                 <p classname='section_title'> &nbsp;&nbsp;&nbsp;
                 </p>
                  <img src={RetailLogo} alt="Retail Logo" width="55"/>
         <br />
         <br />
                  <img src={GovernementLogo} alt="Gouvernement Logo" width="50"/>
                  <br />
                  <br />
                    </td>
                  <td className="textcolumn" align="left" valign="top" width="45%">
                  <b>{t('description.domain2')}</b>
                  <br />
                  {t('description.domain2_company1')}
                  <br />
                  {t('description.domain2_company2')}
                  <br />
                  {t('description.domain2_company3')}
                  <br />
                  {t('description.domain2_company4')}
                  <br />
                  <br />
                  <b>{t('description.domain3')}</b>
                  <br />
                  {t('description.domain3_company1')}
                  <br />
                  <br />
                    <b>{t('description.domain6')}</b>
                    <br />
                  {t('description.domain6_company1')}
                  </td>  
              </tr>
              </tbody>
          </table>  
    </>
    )
} 

export default AboutPage;