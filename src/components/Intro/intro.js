import React, { useEffect, useState } from 'react';
import "./intro.css";
import bgImage from "../../assets/cool-new-banner-2.png";
import { Link } from 'react-scroll';

const Intro = () => {
    const [heroData, setHeroData] = useState({});
    

    useEffect(() => {
        fetch('/data/data.json')
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setHeroData(data.hero); 
            
               
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <section id="intro">
            <div className="introContent">
                <span className='hello'>{heroData?.hello}</span>
                <span className='introText'>{heroData?.introText} <span className="introName">{heroData?.hayden}</span>
                    <br />{heroData?.frontend} <br /> {heroData?.from}</span>
                <br />
                <Link
                    activeClass="active"
                    to="works" 
                    spy={true}
                    smooth={true}
                    offset={-75} 
                    duration={500}
                    className='viewMyWorkBtn' 
                >
                    {heroData?.workBtn}
                </Link>
            </div>
            
            <img src={bgImage} alt="profile" className='bg' />
        </section>
    );
};

export default Intro;
