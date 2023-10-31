import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="Image 2 (1).png " alt="Logo" />
            </div>
            
            <h2>Pour commencer...</h2>
            <p>Faire votre Shynlei, jouer avec, c'est l'occasion <br/> d'écouter vos reves, de les partager et de prendre <br/> confiance dans votre richesse. </p>
            <label>
                Nom et prénom:
                <input className="custom-textarea" type="text" placeholder="Jeal" />
            </label>
            <label>
                
            Mon intention:
                <p> <br/>L'intention, l'objectif de ce Shynlei</p>
                <textarea className="custom-textarea" placeholder="Mon rel "></textarea>
                
            </label>
            {/* Add other elements as needed */}
        </div>
    );
};

export default Sidebar;
