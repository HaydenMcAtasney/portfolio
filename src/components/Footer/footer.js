import React, { useEffect, useState } from 'react';
import './footer.css';
import Icon1 from '../../assets/linkedin-icon.svg';
import Icon2 from '../../assets/github-icon.svg';
import Icon3 from '../../assets/email-icon.svg';




function Footer() {
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
        <section id='footer'>
            <h2 className='footerTitle'>{heroData?.footer?.footerTitle}</h2>
            <p className='footerDescription'> {heroData?.footer?.footerDescription}</p>
            <div>
                <img src={Icon1} alt='linkedin-icon' className='icons'></img>
                <img src={Icon2} alt='github-icon' className='icons'></img>
                <img src={Icon3} alt='email-icon' className='icons'></img>
            </div>
        </section>

    );
}

export default Footer;