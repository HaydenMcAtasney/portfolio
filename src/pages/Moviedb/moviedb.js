import React, { useEffect, useState } from 'react';
import './moviedb.css'; 
import moviedbBanner from '../../assets/movie-db-banner-image.png';
import movieFilterPicture from '../../assets/movie-filter-picture-2.png';
import moviedbResponsive from '../../assets/moviedb-responsive.png';

function MovieDb() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch('/data/data.json') //json file includes MovieDB data
      .then(response => response.json())
      .then(data => {
        setSections(data.movieDB.sections); // Adjusted for movie database data
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <section id='moviedb'>
      <div className="moviedbContent">
        <span className='moviedbText'></span> {/* Tailored content for MovieDB */}
      </div>
      <img src={moviedbBanner} alt="Movie Database Project" className='moviedb-banner' />
      
      {sections.map((section, index) => (
        <div key={index} className="section" id={section.id}>
          <h2>{section.title}</h2>
          
          {section.content && <p>{section.content}</p>}
          
          {section.id === "overview" && (
            <div className="moviedb-table"> {/* Updated class name to match MovieDB */}
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
