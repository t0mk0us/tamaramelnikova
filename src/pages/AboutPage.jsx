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
                  <td align="right">
                      <h5>                  
                          Tamara Melnikova 
                        </h5> 
                        <h4>          
                        {t('description.email')}
                        <br/>
                        {t('description.phone')}
                        <br/>
                        {t('description.linkedin')}                  
                        </h4>   
                  </td>
              </tr>
            
                <tr> 
                  <td className="textcolumn" align="left" valign="top" width="50%">
                  <b>{t('description.profile')}</b>
                  <br />
                  <br /> 
                  {/* <Trans i18nKey="description.cv1"> */}
                  {t('description.profile1')}
                  <br/>
                   {t('description.profile2')}
                   <br/>
                  {t('description.profile3')} 
                  <br/>
                  {t('description.profile4')}
                  <br/>
                  {t('description.profile5')}
                  {/* {t('description.cv1')}                 */}
                  {/* Professionnelle confirmée avec expérience de plus de 15 années en technologies Java 
Travaillait dans tous les étapes de SDLC. */}
{/* </Trans>
<Trans i18nKey="description.cv2"> */}
{/* {t('description.cv2')} */}
{/* Développement, intégration et maintien des application Web pour différentes industries. */}
{/* </Trans>
<Trans i18nKey="description.cv3"> */}
{/* {t('description.cv3')} */}
{/* Collaboration avec des équipes internationales aux États-Unis, Royaume Uni, Inde, etc. */}
{/* </Trans> */}
{/* <Trans i18nKey="description.languages"> */}
{/* {t('description.languages')} */}
{/* </Trans> */}
                  <br />
                  <br />
                  </td>
                  <td className="textcolumn" align="left" valign="top" width="50%">
                  <b>{t('description.skills')}</b>
                  <br />
                  <br />
                  {t('description.skill1')}
                  <br/>
                  {t('description.skill2')}
                  <br/>
                  {t('description.skill3')}
                  <br/>
                  {t('description.skill4')}
                  <br/>
                  {t('description.skill5')}
                  <br/>
                  {t('description.skill6')}
                  <br/>
                  {t('description.skill7')}
                  <br/>
                  {t('description.skill8')}
                  <br/>
                  {t('description.skill9')}
                  <br/>
                  {t('description.skill10')}
                  <br/>
                  {t('description.skill11')}
                  <br/>
                  <br />
                  <br />
                  </td>  
              </tr>
              </tbody>
          </table>  
    </>
    )
} 

export default AboutPage;