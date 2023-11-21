import React, { useState } from 'react';
import Collapse from '../collapse/Collapse';
import './logementCollapse.scss';

function LogementCollapse({ description, equipement }) {
 
  return (
    <div className="Collapses">
      <Collapse
              key="0"
              title="Description"
              content={description}
            />

      <Collapse
              key="1"
              title="Equipements"
              content={equipement}
            />
     
    </div>
  );
}

export default LogementCollapse;