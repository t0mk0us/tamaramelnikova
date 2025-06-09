import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Routes, Route, useNavigate } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; */

function TechnologyPage () {

    const { t } = useTranslation();

    return (
        <>
        <table className="texttable">
            <tbody>
              <tr>                
                  <td align="right">
                  <br/>
                  <br/>
                      <div className="section_title"> 
                      {t('description.technologies1')} 
                      </div>
                      <br/>
                  <br/>
                  </td>
              </tr>
                <tr> 
                  <td className="textcolumn" align="left" valign="top">            
                    {t('description.technology1')}
                    <br />
                    {t('description.technology2')}
                    <br />
                    {t('description.technology3')}
                    <br />
                    {t('description.technology4')}
                    <br />
                    {t('description.technology5')}
                    <br />
                    {t('description.technology6')}
                    <br />
                    {t('description.technology7')}
                    <br />
                  </td>  
              </tr>
              </tbody>
          </table>  
    </>
    )
} 

export default TechnologyPage;