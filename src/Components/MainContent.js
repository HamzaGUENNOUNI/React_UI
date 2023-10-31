import React from 'react';
import StepsComponent from './StepsComponents';

const MainContent = () => {
    return (
        <div className="main-content">
            <div className="Logo1">
                <img src="icons8-menu-30 (1).png " alt="Logo1" />
            </div>
            
            <h1>Votre Shynlei c’est..</h1>
            <p>7 étapes, 2 fiches pour prendre note des rencontres, 1 page pour éclairer le sens, 3 interprétations pour vous aider..</p>
            {/* Add the icons and corresponding texts here */}
            <StepsComponent/>
            <div className='button-container'> <button>EXPRIMER MES RÊVES  </button></div>
           
            
        </div>
    );
};

export default MainContent;
