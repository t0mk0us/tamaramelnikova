import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Routes, Route, useNavigate } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; */
import EmailComponent from '../components/EmailComponent';
import PhoneComponent from '../components/PhoneComponent';
import LinkedInComponent from '../components/LinkedInComponent';

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
                  <br/>
                  <br/>
                      <div className="section_title">                  
                          Tamara Melnikova 
                        </div>
                        <div className="section_subtitle">                                

                            <EmailComponent email='tamara9@rogers.com' className='linkedin-link'>
                                {t('description.email')}
                                </EmailComponent>
                                        <br />
                            <PhoneComponent phone='5147426851' className='linkedin-link'>
                               {t('description.phone')}
                                </PhoneComponent>   
                                <br />
                            <LinkedInComponent linkedin='https://linkedin.com/in/tamaram' className='linkedin-link'>
                                {t('description.linkedin')}
                                </LinkedInComponent>                                     
                        </div>  
                        <br/>
                  <br/>
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