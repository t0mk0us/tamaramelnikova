import React from 'react';
import { useTranslation } from 'react-i18next';
//import { useTranslation } from 'react-i18next';
// import { Routes, Route, useNavigate } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; */

function LanguagesPage () {

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
                  <br/>
                  <br/>
                      <div className="section_title">                 
                        {t('description.languages1')} 
                        </div>
                      <div className="section_subtitle">                 
                        {t('description.languages2')} 
                        <br/>
                  <br/>
                        </div>
                  </td>
              </tr>
            
                <tr> 
                <td className="textcolumn" align="left" valign="top" width="50%">
                  <b>LATIN</b> 
                  <br />
                  <br />
                  <b>{t('description.french1')}</b>
                  &nbsp;
                  {t('description.french2')}
                  <br />
                  <b>{t('description.english1')}</b>
                  &nbsp;
                  {t('description.english2')}
                  <br />
                  </td>
                  <td className="textcolumn" align="left" valign="top" width="50%">
                  <b>SLAVIC</b>
                  <br />
                  <br />
                  <b>{t('description.ukrainian1')}</b>
                  &nbsp;
                  {t('description.ukrainian2')}
                  <br />
                  <b>{t('description.polish1')}</b>
                  &nbsp;
                  {t('description.polish2')}
                  <br />
                  {t('description.russian1')}
                  &nbsp;
                  {t('description.russian2')}
                  <br />
                  </td>  
              </tr>
              </tbody>
          </table>  
    </>
    )
} 

export default LanguagesPage;