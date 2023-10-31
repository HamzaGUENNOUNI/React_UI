import React from 'react';

const stepsData = [
    { id: 1, text: "Le rêve liber l'expression", icon: "Page-1.svg" },
    { id: 2, text: "Le sens éclaire le parcours", icon: "Page-2.svg" },
    { id: 3, text: "La différence rend unique", icon: "Page-3.svg" },
    { id: 1, text: "la valeur humaine met en ", icon: "Page-4.svg" },
    { id: 2, text: "la clé exprime le style ", icon: "Page-5.svg" },
    { id: 3, text: "La différence rend unique", icon: "Page-6.svg" },
    { id: 1, text: "Le rêve liber l'expression", icon: "Page-7.svg" },
    
    
];


const StepsComponent = () => {
    return (
        <ul className="stepsContainer" >

            {stepsData.map(step => (
                <li key={step.id} >
                    <img src={step.icon} alt={step.text} className="stepIcon" width="30" height="30" />
                    <p>{step.text}</p>

                    
                </li>
                
                
            ))}
        </ul>
    );
}

export default StepsComponent;