import React from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; */

function AboutPage () {

    return (
        <>
        <table classname="texttable">
              <tr colspan="2">
                  <td>
                      <br />
                      </td>
                  <td align="right" width="90%">
                      <h5>                  
                          Tamara Melnikova 
                        <br />
                        worked in the following industries
                        </h5>
                  </td>
              </tr>
            
                <tr> 
                  <td class="textcolumn" align="left" valign="top" width="50%">
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
                  <td class="textcolumn" align="left" valign="top" width="50%">
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
          </table>  
    </>
    )
} 

export default AboutPage;