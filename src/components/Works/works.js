import React, { useEffect, useState } from 'react';
import './works.css';
import Portfolio1 from '../../assets/ourmoviedb-thumbnail.png';
import PortfolioThumbnail from '../../assets/new-portfolio-thumbnail.png';

import { Link } from 'react-router-dom';




const Works = () => {
    const [heroData, setHeroData] = useState({})

// console.log(heroData)
useEffect(() => {
    fetch('/data/data.json')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setHeroData(data)
        })
        .catch(error => console.log(error))
}, [])
    return (
        <section id='works'>
                <h2 className='worksTitle'>{heroData?.works?.title}</h2>
                <span className='worksDescription'>{heroData?.works?.description}</span>
                <div className='worksImgs'>
                <div className="projectContainer">
                    <img src={PortfolioThumbnail} alt='portfolio-1' className='worksImg' />
                    <div className="projectInfo">
                        <h3>{heroData?.works?.portfolioTitle}</h3>
                        <p>{heroData?.works?.portfolioLanguages}</p>
                        <div className="linksContainer">
                        <a href="https://github.com/">GitHub</a>
                        <a href="https://live-site.com">Live Site</a>
                        <Link to="/portfolio">Learn More</Link>

                        </div>
                    </div>
                </div>
                <div className="projectContainer">
                    <img src={Portfolio1} alt='portfolio-1' className='worksImg' />
                    <div className="projectInfo">
                        <h3>{heroData?.works?.movieDatabaseTitle}</h3>
                        <p>{heroData?.works?.movieDatabaseLanguages}</p>
                        <div className="linksContainer">
                        <a href="https://github.com/">GitHub</a>
                        <a href="https://live-site.com">Live Site</a>
                        <Link to="/moviedb">Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="projectContainer">
                    <img src={Portfolio1} alt='portfolio-1' className='worksImg' />
                    <div className="projectInfo">
                        <h3>{heroData?.works?.capstoneTitle}</h3>
                        <p>{heroData?.works?.capstoneLanguages}</p>
                        <div className="linksContainer">
                        <a href="https://github.com/">GitHub</a>
                        <a href="https://live-site.com">Live Site</a>
                        <Link to="/capstone">Learn More</Link>
                        </div>
                    </div>
                </div>

                    
                    
                    
                    
                </div>
                
        </section>
    );
}

export default Works