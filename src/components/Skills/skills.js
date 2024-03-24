import React, { useEffect, useState } from 'react';
import './skills.css';
import CodeSkills from '../../assets/code-image.svg';
import DesignSkils from '../../assets/design-image.svg';

const Skills = () => { 
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
        <section id='skills'>
            <span className='skillTitle'>
            {heroData?.about?.title}
            </span>
            <span className='skillDescription'> {heroData?.about?.description}</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={CodeSkills} alt="CodeSkills" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>{heroData?.about?.codingSkills}</h2>
                        <p>{heroData?.about?.codingParagraph}</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={DesignSkils} alt="DesignSkills" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>{heroData?.about?.designSkills}</h2>
                        <p>{heroData?.about?.designParagraph}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;