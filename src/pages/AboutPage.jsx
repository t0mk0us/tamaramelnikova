import React from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
/* import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; */

function AboutPage () {

    return (
        <>
        <table  classname="texttable">
              <tr colspan="2">
                  <td>
                      <br />
                      </td>
                  <td align="right">
                      <h5>                  
                          Tamara Melnikova 
                        <br />
                        tamara9@rogers.com
                        </h5>
                  </td>
              </tr>
            
                <tr> 
                  <td class="textcolumn" align="left" valign="top">
                  <b>PROFILE</b> 
                  <br />
                  <br />
                  Professionnelle confirmée avec expérience de plus de 15 années en technologies Java 
Travaillait dans tous les étapes de SDLC.
Développement, intégration et maintien des application Web pour différentes industries
Collaboration avec des équipes internationales aux États-Unis, Royaume Uni, Inde, etc.
Langues : Français, Anglais, Ukrainien, Russe.
                  <br />
                  <br />
                  </td>
                  <td class="textcolumn" align="left" valign="top">
                  <b>CHAMPS DE COMPETENCES</b>
                  <br />
                  <br />
                  Documentations des spécifications fonctionnelles et techniques.
Diagrammes des cas d’usage, d’architecture et séquentielles.
Développement, débogage, build et déploiement des applications en Java. 
Maintenance et support des applications.
Architecture microservices.
Création des tests unitaires et intégrés. Shell scripting (bash).
Approche Agile – Scrums, Peer code review (Kanban), Sprint review et planification.
                  <br />
                  <br />
                  </td>  
              </tr>
          </table>  
    </>
    )
} 

export default AboutPage;