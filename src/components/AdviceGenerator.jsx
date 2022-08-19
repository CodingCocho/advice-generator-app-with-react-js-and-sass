import './styles/AdviceGenerator.css'
import { useState, useEffect } from 'react'

// Export our advice generator component
export const AdviceGenerator = () =>
{

    const [quote, setQuote] = useState('');

    const fetchAQuote = () =>
    {

    }

    useEffect(() =>
    {

    }, [])

    return (
        // Create container for component
        <div className="advice-container">
            {/* Hold advice id */}
            <p 
            className="advice-number">
                Advice #420
            </p>
            {/* Hold advice quote */}
            <p 
            className="quote">
                {quote}
            </p>
            {/* Hold container divider image for mobile viewport */}
            <img 
            alt="container-divider-mobile"
            className="divider-image-mobile"
            src="../images/pattern-divider-mobile.svg"  
            />
            {/* Hold container divider image for desktop viewport */}
            <img 
            alt="container-divider-desktop"
            className="divider-image-desktop" 
            src="../images/pattern-divider-desktop.svg"
            />
            {/* Create container for api fetch button */}
            <div 
            className="api-button">
                {/* Image for api fetch button */}
                <img  
                alt="api-dice"
                className="dice"
                src="../images/icon-dice.svg" 
                />
            </div>
        </div>
    )
}