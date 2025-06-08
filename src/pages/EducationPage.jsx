import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Routes, Route, useNavigate } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; */
import Concordia from "../images/Concordia.jpg";
import GoldenKey from "../images/GoldenKey.jpg";


function EducationPage () {

  const { t } = useTranslation();

    return (
        <>
        <table className="texttable">
          <tbody>
              <tr colSpan="2">
              <td>
                <br />
            </td> 
                  <td align="right">
                      <h5>{t('description.education1')}</h5>
                  </td>
              </tr>
              <tr>
              <td className="textcolumn" align="left" valign="top">
                  <b>{t('description.diploma')}</b> 
                  <br />
                  {t('description.option')}
                  <br />
                  {t('description.gpa')}
                  <br/>
                  <i>{t('description.distinction')}</i>
                  <br/>
                  <b>{t('description.university')}</b>
                  <br/>
                  {t('description.study_period')}
                    <br />
                    <br />
                    {t('description.honours')}
                  <br/>
                  <b>{t('description.goldenkey')}</b>
                  <br/>
                  {t('description.gkposition')}
                  <br />
                  <br />
                  </td> 
                  <td className="textcolumn" align="right" valign="top">
                  <img src={Concordia} alt="Concordia Diplome" width="300"/> 
                    <br />
                    <img src={GoldenKey} alt="Golden Key Certificate" width="300"/> 
                    <br />
                  </td>
                  </tr>
                  </tbody>
          </table>  
    </>
    )
} 

export default EducationPage;