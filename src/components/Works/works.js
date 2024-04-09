import React, { useEffect, useState } from 'react';
import './works.css';
import MovieThumbnail from '../../assets/works-thumbnail-movie-db.png';
import PortfolioThumbnail from '../../assets/works-portfolio-thumbnail.png';
import FlowerShopThumbnail from '../../assets/works-flower-shop-thumbnail.png';

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
                    <img src={PortfolioThumbnail} alt='portfolio-thumbnail' className='worksImg' />
                    <div className="projectInfo">
                        <h3>{heroData?.works?.portfolioTitle}</h3>
                        <p>{heroData?.works?.portfolioLanguages}</p>
                        <div className="linksContainer">
                        <a href="https://github.com/HaydenMcAtasney/portfolio">GitHub</a>
                        <a href="https://haydenmcatasney.com/">Live Site</a>
                        <Link to="/portfolio">LEARN MORE</Link>

                        </div>
                    </div>
                </div>
                <div className="projectContainer">
                    <img src={MovieThumbnail} alt='movie-database-thumbnail' className='worksImg' />
                    <div className="projectInfo">
                        <h3>{heroData?.works?.movieDatabaseTitle}</h3>
                        <p>{heroData?.works?.movieDatabaseLanguages}</p>
                        <div className="linksContainer">
                        <a href="https://github.com/NandoHsp/ourmoviedb-app">GitHub</a>
                        <a href="https://nandowebdev.com/ourmoviedb/">Live Site</a>
                        <Link to="/moviedb">LEARN MORE</Link>
                        </div>
                    </div>
                </div>
                <div className="projectContainer">
                    <img src={FlowerShopThumbnail} alt='Flower-shop-thumbnail' className='worksImg' />
                    <div className="projectInfo">
                        <h3>{heroData?.works?.capstoneTitle}</h3>
                        <p>{heroData?.works?.capstoneLanguages}</p>
                        <div className="linksContainer">
                        <a href="https://github.com/htpwebdesign/floral-shop">GitHub</a>
                        <a href="https://floralshop.bcitwebdeveloper.ca/">Live Site</a>
                        <Link to="/capstone">LEARN MORE</Link>
                        </div>
                    </div>
                </div>

                    
                    
                    
                    
                </div>
                
        </section>
    );
}

export default Works