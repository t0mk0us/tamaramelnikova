import React from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; */
import Concordia from "../images/diplomeconcordiatm.jpg";
import GoldenKey from "../images/GoldenKey.jpg";


function EducationPage () {

    return (
        <>
        <table className="texttable">
          <tbody>
              <tr colSpan="2">
              <td>
                <br />
            </td> 
                  <td align="right">
                      <h5>EDUCATION</h5>
                  </td>
              </tr>
              <tr>
              <td className="textcolumn" align="left" valign="top">
                  <b>Concordia University of Montreal</b> 
                  <br />
                  Study field:&nbsp;<i>Computer Science</i>
                  <br />
                  Option:&nbsp;<i>Computer applications</i>
                  <br />
                  <br />
                    <b>GPA:&nbsp;3.46 (A)</b>
                    <br />
                    <i>(Graduated with Distinction)</i>
                    <br />
                  </td> 
                  <td className="textcolumn" align="right" valign="top">
                  <img src={Concordia} alt="Concordia Diplome" width="300" height="200"/> 
                    <br />
                    <img src={GoldenKey} alt="Golden Key Certificate" width="300" height="200"/> 
                    <br />
                  </td>
                  </tr>
                  </tbody>
          </table>  
    </>
    )
} 

export default EducationPage;