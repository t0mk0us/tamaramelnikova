import React from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; */

function AboutPage () {

    return (
        <>
        <table>
              <tr colspan="2">
                  <td>
                      <br />
                      </td>
                  <td align="right">
                      <h5>                  
                          Tamara Melnikova 
                        <br />
                        worked in the following industries
                        </h5>
                  </td>
              </tr>
            
                <tr> 
                  <td class="textcolumn" align="left" valign="top" width="60%">
                  TELECOMMUNICATIONS 
                  <br />
                  <br />
                  COGECO Cable
                  <br />
                  <br />
                  RETAIL
                  <br />
                  <br />
                  Reitmans Lmtd
                  <br />
                  <br />
                  BANKING
                  <br />
                  <br />
                  Deutsche Bank (for CGI)
                  <br />
                  Laurentian Bank (for CGI)
                  <br />
                  Desjardins (for COFOMO)
                  </td>
                  <td class="textcolumn" align="left" valign="top">
                  ENERGY
                  <br />
                  Hydro-Quebec (for COFOMO)
                  <br />
                  <br />
                    INSURANCE
                  <br />
                    Humania Assurance
                  <br />
                  <br />
                    GOVERNEMENT
                    <br />
                    Elections Quebec (for Transitions Services Conseils)
                  </td>  
              </tr>
          </table>  
    </>
    )
} 

export default AboutPage;