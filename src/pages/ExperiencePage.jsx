import React from 'react';
import { useTranslation } from 'react-i18next';
// import { Routes, Route, useNavigate } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; */

function ExperiencePage () {

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
                      {t('description.experiences1')} </div>
                      <br/>
                  <br/>
                  </td>
              </tr>
                <tr> 
                  <td className="textcolumn" align="left" valign="top">
                    <b>{t('description.experience1')}</b> 	
                    {t('description.work_period1')}
                    <br />
                    <b>{t('description.company1')}</b>
                    {t('description.location1')}
                    <br />
                    <i>{t('description.note1')}</i>
                    <br />
                    {t('description.task1')}
                        <br />
                        <br />
                    <b>{t('description.experience2')}</b> 	
                  {t('description.work_period2')}
                  <br />
                  <b>{t('description.company2')}</b>
                  {t('description.location2')}
                  <br />
{/*                   <i>{t('description.note2')}</i>
                  <br /> */}
                  {t('description.task2')} 
                    <br />
                    <br />
                    <b>{t('description.experience3')}</b> 	
                  {t('description.work_period3')}
                  <br />
                  <b>{t('description.company3')}</b>
                  {t('description.location3')}
                  <br />
                  <i>{t('description.note3')}</i>
                  <br />
                  {t('description.task3')} 
                  <br />
                <br />
                  <b>{t('description.experience3a')}</b> 	
                  {t('description.work_period3a')}
                  <br />
                  <b>{t('description.company3a')}</b>
                  {t('description.location3a')}
                  <br />
  {/*                 <i>{t('description.note3a')}</i>
                  <br /> */}
                  {t('description.task3a')} 
                  <br />
                <br />
                    <b>{t('description.experience4')}</b> 	
                  {t('description.work_period4')}
                  <br />
                  <b>{t('description.company4')}</b>
                  {t('description.location4')}
                  <br />
{/*                   <i>{t('description.note4')}</i>
                  <br /> */}
                  {t('description.task4')} 
                  <br />
                <br />
                    <b>{t('description.experience5')}</b> 	
                  {t('description.work_period5')}
                  <br />
                  <b>{t('description.company5')}</b>
                  {t('description.location5')}
                  <br />
                  <i>{t('description.note5')}</i>
                  <br />
                  {t('description.task5')}
                  <br />
                <br />
                    <b>{t('description.experience6')}</b> 	
                  {t('description.work_period6')}
                  <br />
                  <b>{t('description.company6')}</b>
                  {t('description.location6')}
                  <br />
{/*                   <i>{t('description.note6')}</i>
                  <br /> */}
                  {t('description.task6')}
                  <br />
                <br />
                    <b>{t('description.experience7')}</b> 	
                  {t('description.work_period7')}
                  <br />
                  <b>{t('description.company7')}</b>
                  {t('description.location7')}
                  <br />
                  <i>{t('description.note7')}</i>
                  <br />
                  {t('description.task7')}
                  <br />
                <br />
                    <b>{t('description.experience8')}</b> 	
                  {t('description.work_period8')}
                  <br />
                  <b>{t('description.company8')}</b>
                  {t('description.location8')}
                  <br />
{/*                   <i>{t('description.note8')}</i>
                  <br /> */}
                  {t('description.task8')}
                  <br />
                <br />
                    <b>{t('description.experience9')}</b> 	
                  {t('description.work_period9')}
                  <br />
                  <b>{t('description.company9')}</b>
                  {t('description.location9')}
                  <br />
{/*                   <i>{t('description.note9')}</i>
                  <br /> */}
                  {t('description.task9')}
                  <br />
                <br />
                    <b>{t('description.experience10')}</b> 	
                  {t('description.work_period10')}
                  <br />
                  <b>{t('description.company10')}</b>
                  {t('description.location10')}
                  <br />
                  <i>{t('description.note10')}</i>
                  <br />
                  {t('description.task10')}
                  <br />
                <br />
                    <b>{t('description.experience11')}</b> 	
                  {t('description.work_period11')}
                  <br />
                  <b>{t('description.company11')}</b>
                  {t('description.location11')}
                  <br />
                  <i>{t('description.note11')}</i> 
                  <br />
                  {t('description.task11')}
                  </td>  
              </tr>
              </tbody>
          </table>  
    </>
    )
} 

export default ExperiencePage;