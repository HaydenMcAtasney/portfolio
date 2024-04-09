import React, { useEffect, useState } from 'react';
import './footer.css';
import Icon1 from '../../assets/linkedin-icon.svg';
import Icon2 from '../../assets/github-icon.svg';
import Icon3 from '../../assets/email-icon.svg';

function Footer() {
    const [heroData, setHeroData] = useState({});

    useEffect(() => {
        fetch('/data/data.json')
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setHeroData(data)
            })
            .catch(error => console.log(error));
    }, []);

    const copyEmailToClipboard = () => {
        const email = "officiallyhayden@gmail.com"; 
        navigator.clipboard.writeText(email)
            .then(() => {
                
                alert("Email address copied to clipboard!");
            })
            .catch(err => {
                console.error('Failed to copy email to clipboard', err);
            });
    };

    return (
        <section id='footer'>
            <h2 className='footerTitle'>{heroData?.footer?.footerTitle}</h2>
            <p className='footerDescription'>{heroData?.footer?.footerDescription}</p>
            <div>
                <a href="https://www.linkedin.com/in/haydenmcatasney/" target="_blank" rel="noopener noreferrer">
                    <img src={Icon1} alt='LinkedIn icon' className='icons' />
                </a>

                <a href="https://github.com/HaydenMcAtasney" target="_blank" rel="noopener noreferrer">
                    <img src={Icon2} alt='GitHub icon' className='icons' />
                </a>

                
                <button onClick={copyEmailToClipboard} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
                    <img src={Icon3} alt='Email icon' className='icons' />
                </button>
            </div>
        </section>
    );
}

export default Footer;
