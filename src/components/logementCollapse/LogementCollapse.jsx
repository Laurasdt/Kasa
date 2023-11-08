import React, { useState } from 'react';
import Arrow from "../../Assets/Arrow.png";
import './logementCollapse.scss';

function LogementCollapse({ collapseDescription, collapseEquipement }) {
  const [isOpenDescription, setOpenDescription] = useState(false);
  const [isOpenEquipement, setOpenEquipement] = useState(false);

  function toggleDescription() {
    setOpenDescription((prev) => !prev);
  }

  function toggleEquipement() {
    setOpenEquipement((prev) => !prev);
  }

  return (
    <div className="Collapses">
      <div className="Collapse">
        <div className="Header" onClick={toggleDescription}>
          <h3>Description</h3>
          <img
            className={`arrow ${isOpenDescription ? 'arrow_down' : 'arrow_up'}`}
            src={Arrow}
            alt='show content'
          />
        </div>
        {isOpenDescription && (
          <div className="Collapse__Description">
            <p>{collapseDescription}</p>
          </div>
        )}
      </div>
      <div className="Collapse">
        <div className="Header" onClick={toggleEquipement}>
          <h3>Équipements</h3>
          <img
            className={`arrow ${isOpenEquipement ? 'arrow_down' : 'arrow_up'}`}
            src={Arrow}
            alt='show content'
          />
        </div>
        {isOpenEquipement && (
          <ul className="Collapse__Equipement">
            {collapseEquipement.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default LogementCollapse;