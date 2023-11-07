import Arrow from "../../Assets/Arrow.png";
import './logementCollapse.scss'

function LogementCollapse({ collapseDescription, collapseEquipement }) {
  return (
    <div className="Collapses">
      <div className="Collapse">
        <div className="Collapse__title">
          <h3>Description</h3>
          <img src={Arrow} alt="flèche" />
        </div>
        <div className="collapseContent">
          <p>{collapseDescription}</p>
        </div>
      </div>
      <div className="Collapse">
        <div className="Collapse__title">
          <h3>Équipements</h3>
          <img src={Arrow} alt="flèche" />
        </div>
        <ul className="Equipments">
    {collapseEquipement.map((equipment, index) => (
      <li key={index}>{equipment}</li>
    ))}
  </ul>
      </div>
    </div>
  );
}

export default LogementCollapse;