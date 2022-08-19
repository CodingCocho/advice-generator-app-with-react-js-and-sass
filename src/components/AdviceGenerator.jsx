import './styles/AdviceGenerator.css';
import { useState } from 'react';
import mobileDivider from '../images/pattern-divider-mobile.svg';
import desktopDivider from '../images/pattern-divider-desktop.svg';
import dice from '../images/icon-dice.svg';

// Export our advice generator component
export const AdviceGenerator = () =>
{
    // Hold the useStates for our component
    const [adviceNumber, setAdviceNumber] = useState('ADVICE #139');
    const [quote, setQuote] = useState('If you\'\re going bald, don\'\t comb your hair over your bald patch');

    // API function that retrieves an advice slip object
    const fetchAQuote = () =>
    {
        // Make fetch call to API
        fetch('https://api.adviceslip.com/advice')
            .then((promise) => promise.json())
            .then((data) => 
            {
               // Hold advice object 
               let adviceObject = data.slip;
               // Hold the new strings for our useStates    
               let adviceString = 'ADVICE #' + adviceObject.id;
               let quoteString = adviceObject.advice;
               // Update our component's useStates   
               setAdviceNumber(adviceString);
               setQuote(quoteString);
            })
            // Catch an error
            .catch((err) =>
            {
                // Print out the error to see what is wrong
                console.log(err);
            })
    }

    return (
        // Create container for component
        <div className="advice-container">
            {/* Hold advice id */}
            <p 
            className="advice-number">
                {adviceNumber}
            </p>
            {/* Hold advice quote */}
            <p 
            className="quote">
                "{quote}"
            </p>
            {/* Hold container divider image for mobile viewport */}
            <img 
            alt="container-divider-mobile"
            className="divider-image-mobile"
            src={mobileDivider} 
            />
            {/* Hold container divider image for desktop viewport */}
            <img 
            alt="container-divider-desktop"
            className="divider-image-desktop" 
            src={desktopDivider}
            />
            {/* Create container for api fetch button */}
            <div 
            className="api-button"
            onClick={fetchAQuote}
            >
                {/* Image for api fetch button */}
                <img  
                alt="api-dice"
                className="dice"
                src={dice}
                />
            </div>
        </div>
    )
}