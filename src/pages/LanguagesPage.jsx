import React from 'react';
//import { useTranslation } from 'react-i18next';
// import { Routes, Route, useNavigate } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; */

function LanguagesPage () {

    // const { t } = useTranslation();

    return (
        <>
        <table className="texttable">
            <tbody>
              <tr colSpan="2">
                  <td>
                      <br />
                      </td>
                  <td align="right">
                      <h5>                  
                          Tamara Melnikova 
                        <br />
                        Fluent in the following languages
                        </h5>
                  </td>
              </tr>
            
                <tr> 
                <td className="textcolumn" align="left" valign="top" width="50%">
                  <b>LATIN</b> 
                  <br />
                  <br />
                  {/* {t('description.french')} */}
                  French
                  <br />
                  {/* {t('description.english')} */}
                  English
                  <br />
                  </td>
                  <td className="textcolumn" align="left" valign="top" width="50%">
                  <b>SLAVIC</b>
                  <br />
                  <br />
                  {/* {t('description.ukrainian')} */}
                    Ukrainian
                  <br />
                  {/* {t('description.russian')} */}
                  russian
                  <br />
                  </td>  
              </tr>
              </tbody>
          </table>  
    </>
    )
} 

export default LanguagesPage;