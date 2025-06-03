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
                        Fluent in the following languages
                        </h5>
                  </td>
              </tr>
            
                <tr> 
                <td class="textcolumn" align="left" valign="top" width="50%">
                  <b>LATIN</b> 
                  <br />
                  <br />
                  French
                  <br />
                  English
                  <br />
                  </td>
                  <td class="textcolumn" align="left" valign="top" width="50%">
                  <b>SLAVIC</b>
                  <br />
                  <br />
                    Ukrainian
                  <br />
                  russian
                  <br />
                  </td>  
              </tr>
          </table>  
    </>
    )
} 

export default AboutPage;