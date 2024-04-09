import React, { useEffect, useState } from 'react';
import "./portfolio.css";
import portfolioImage from '../../assets/main-portfolio-banner-2.png';
import longDataFile from '../../assets/yellow-border-code.png';
import responsiveDesign from '../../assets/responsive-design.png';

function Portfolio() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => {
        setSections(data.portfolio.sections);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <section id='portfolio'>
      <div className="portfolioContent">
        <span className='portfolioText'>Portfolio</span>
      </div>
      <img src={portfolioImage} alt="profile" className='portfolio-banner' />
      
      {sections.map((section, index) => (
        <div key={index} className="section" id={section.id}>
          <h2>{section.title}</h2>
          
          {section.content && <p>{section.content}</p>}
          
          {section.id === "overview" && (
            <div className="portfolio-table">
              <table>
                <tbody>
                  <tr>
                    <th>Duration</th>
                    <td>{section.duration}</td>
                  </tr>
                  <tr>
                    <th>Team</th>
                    <td>{section.team}</td>
                  </tr>
                  <tr>
                    <th>Roles</th>
                    <td>{section.roles}</td>
                  </tr>
                  <tr>
                    <th>Tech Stack</th>
                    <td>{section.techStack}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {section.id === "design" && (
            <div className="project-buttons">
              <button onClick={() => window.location.href = section.wireframes.all}>Wireframes</button>
              {/* <button onClick={() => window.location.href = section.prototypes.desktop}>Desktop Prototype</button> */}
              {/* <button onClick={() => window.location.href = section.prototypes.mobile}>Mobile Prototype</button> */}
              
            </div>
          )}

          {section.id === "development" && (
            <>
              <div className="subsection">
                <div className="subsection-content">
                  <h3>Big Ol' Data File</h3>
                  <p>{section.bigDataFile}</p>
                </div>
                <img src={longDataFile} alt="One Long Data File" className="subsection-image" />
              </div>
              <div className="subsection">
                <div className="subsection-content">
                  <h3>Responsive Design</h3>
                  <p>{section.responsiveDesign}</p>
                </div>
                <img src={responsiveDesign} alt="Responsive Design" className="subsection-image" />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}

export default Portfolio;

