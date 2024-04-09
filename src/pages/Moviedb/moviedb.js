import React, { useEffect, useState } from 'react';
import './moviedb.css'; 
import moviedbBanner from '../../assets/movie-database-banner-5.png';
import movieFilterPicture from '../../assets/movie-filter-picture-2.png';
import moviedbResponsive from '../../assets/yellow-border-preview.png';

function MovieDb() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch('/data/data.json') 
      .then(response => response.json())
      .then(data => {
        setSections(data.movieDB.sections); 
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <section id='moviedb'>
      <div className="moviedbContent">
        <span className='moviedbText'>Movie Database</span> 
      </div>
      <img src={moviedbBanner} alt="Movie Database Project" className='moviedb-banner' />
      
      {sections.map((section, index) => (
        <div key={index} className="section" id={section.id}>
          <h2>{section.title}</h2>
          
          {section.content && <p>{section.content}</p>}
          
          {section.id === "overview" && (
            <div className="moviedb-table"> 
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
              <button onClick={() => window.location.href = section.prototypes.desktop}>Desktop Prototype</button>
              <button onClick={() => window.location.href = section.prototypes.mobile}>Mobile Prototype</button>
            </div>
          )}

          {section.id === "development" && (
            <>
              <div className="subsection">
                <div className="subsection-content">
                  <h3>Movie Filter</h3> 
                  <p>{section.database}</p> 
                </div>
                <img src={movieFilterPicture} alt="MovieDB movie filter" className="subsection-image" />
              </div>
              <div className="subsection">
                <div className="subsection-content">
                  <h3>Stylin'</h3> 
                  <p>{section.styling}</p>
                </div>
                <img src={moviedbResponsive} alt="Styling for MovieDB" className="subsection-image" />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}

export default MovieDb;
