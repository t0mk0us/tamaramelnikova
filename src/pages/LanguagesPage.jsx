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
                        Fluent in the following languages
                        </h5>
                  </td>
              </tr>
            
                <tr> 
                <td class="textcolumn" align="left" valign="top" width="60%">
                  LATIN 
                  <br />
                  <br />
                  French
                  <br />
                  English
                  <br />
                  </td>
                  <td class="textcolumn" align="left" valign="top">
                  SLAVIC
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