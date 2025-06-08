import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Routes, Route, useNavigate } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; */

function AboutPage () {

  const { t } = useTranslation();

    return (
        <>
        <table className="texttable">
          <tbody>
              <tr colSpan="2">
                  <td>
                      <br />
                      </td>
                  <td align="right" width="90%">
                      <h5>                  
                      {t('description.domains1')} 
                        </h5>
                  </td>
              </tr>        
                <tr> 
                  <td className="textcolumn" align="left" valign="top" width="50%">
                  <b>TELECOMMUNICATIONS</b> 
                  <br />
                  COGECO Cable
                  <br />
                  <br />
                  <b>RETAIL</b>
                  <br />
                  Reitmans Lmtd
                  <br />
                  <br />
                  <b>BANKING</b>
                  <br />
                  Deutsche Bank (for CGI)
                  <br />
                  Laurentian Bank (for CGI)
                  <br />
                  Desjardins (for COFOMO)
                  </td>
                  <td className="textcolumn" align="left" valign="top" width="50%">
                  <b>ENERGY</b>
                  <br />
                  Hydro-Quebec (for COFOMO)
                  <br />
                  <br />
                    <b>INSURANCE</b>
                  <br />
                    Humania Assurance
                  <br />
                  <br />
                    <b>GOVERNEMENT</b>
                    <br />
                    Elections Quebec (for Transitions Services Conseils)
                  </td>  
              </tr>
              </tbody>
          </table>  
    </>
    )
} 

export default AboutPage;