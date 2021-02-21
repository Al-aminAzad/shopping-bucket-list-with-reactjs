import FilterOverLay from './filterOverLay.jsx';
import Suggestion from '../suggestion';
import plusIcon from '../../assets/icons/plus-icon.png';
const CreateList = ({ extra, label }) => {
  return (
    <div className="section add-item __shadow--sm">
      <div className="add-item__relative">
        <div className="add-item__input">
          <img className="add-item__icon" src={plusIcon} alt={label} />
          <input className="add-item__input-field" type="text" placeholder={label} />
        </div>
        {/* Filter Overlay */}

        {extra && <FilterOverLay />}
      </div>
      <div className="horizontal-line"></div>
      {/* Suggestion Chips */}

      {extra && <Suggestion />}
    </div>
  );
};
export default CreateList;
