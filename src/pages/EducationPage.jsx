import React from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; */
import Concordia from "../images/diplomeconcordiatm.jpg";
import GoldenKey from "../images/20231124_173130.jpg";


function EducationPage () {

    return (
        <>
        <table>
              <tr colSpan="2" align="right">
                  <td align="right">
                      <h5>EDUCATION</h5>
                  </td>
              </tr>
              <tr>
              <td class="textcolumn" align="left" valign="top" width="60%">
                  Concordia University of Montreal 
                  <br />
                  Computer Science
                  <br />
                  Option:&nbsp;Computer applications
                  <br />
                    GPA:&nbsp;3.46 (A)
                    <br />
                    (Graduated with Distinction)
                    <br />
                  </td> 
                  <td class="textcolumn" align="left" valign="top" width="40%">
                  <img src={Concordia} alt="Concordia Diplome" width="300" height="200"/> 
                    <br />
                    <img src={GoldenKey} alt="Golden Key Certificate" width="300" height="200"/> 
                    <br />
                  </td>
                  </tr>
          </table>  
    </>
    )
} 

export default EducationPage;