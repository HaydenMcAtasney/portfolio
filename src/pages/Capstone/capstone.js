import React, { useEffect, useState } from 'react';
import './capstone.css'; 
import portfolioImage from '../../assets/portfolio-image-test.jpg';
import longDataFile from '../../assets/long-data-file-1.png';
import responsiveDesign from '../../assets/responsive-design.png';

function Capstone() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch('/data/data.json') 
      .then(response => response.json())
      .then(data => {
        setSections(data.capstone.sections);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <section id='capstone'>
    <div className="capstoneContent">
      <span className='capstoneText'>Capstone Project</span> {/* Updated text content */}
    </div>
    <img src={portfolioImage} alt="Capstone Project" className='capstone-banner' />
    
    {sections.map((section, index) => (
      <div key={index} className="section" id={section.id}>
        <h2>{section.title}</h2>
        
        {section.content && <p>{section.content}</p>}
        
        {section.id === "overview" && (
          <div className="capstone-table"> {/* Updated class name */}
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
            <button onClick={() => window.location.href = section.wireframes.desktop}>Desktop Wireframe</button>
            <button onClick={() => window.location.href = section.wireframes.mobile}>Mobile Wireframe</button>
          </div>
        )}

        {section.id === "development" && (
          <>
            <div className="subsection">
              <div className="subsection-content">
                <h3>WordPress, WordPress, WordPress!</h3>
                <p>{section.wordpress}</p>
              </div>
              <img src={longDataFile} alt="One Long Data File for Capstone" className="subsection-image" /> {/* Assume a capstone-specific image */}
            </div>
            <div className="subsection">
              <div className="subsection-content">
                <h3>Major Style</h3>
                <p>{section.styling}</p>
              </div>
              <img src={responsiveDesign} alt="Responsive Design for Capstone" className="subsection-image" /> {/* Assume a capstone-specific image */}
            </div>
          </>
        )}
      </div>
    ))}
  </section>

  );
}

export default Capstone;
