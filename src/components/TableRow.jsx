import { useState } from "react";
import DescriptionCell from './DescriptionCell.jsx';
import RateCell from './RateCell.jsx';
import HoursCell from './HoursCell.jsx';
import ModeButtons from './ModeButtons.jsx';

const TableRow = ({ initialIsEditing, initialInvoiceData }) => {
  const [editMode, setEditMode] = useState(initialIsEditing);

  const [description, setDescription] = useState(initialInvoiceData.description)
  const [rate, setRate] = useState(initialInvoiceData.rate)
  const [hours, setHours] = useState(initialInvoiceData.hours)

  // define function to set editMode back and forth
  const changeEditMode = () => setEditMode(true);
  const changeNormalMode = () => setEditMode(false);


  // OTHER POSSIBLE WAY TO TOGGLE IN BETWEEEN THE TWO MODES
  // const toggleEditMode = () => setEditMode(!editMode);



  return (
    <tr>
      <ModeButtons 
        isEditing={editMode} 
        editClick={changeEditMode}
        saveClick={changeNormalMode}
      />
      <DescriptionCell 
        isEditing={editMode} 
        value={description} 
        onValueChange={setDescription}
      />
      <RateCell 
        isEditing={editMode} 
        value={rate} 
        onValueChange={setRate}
      />
      <HoursCell 
        isEditing={editMode} 
        value={hours}
        onValueChange={setHours}
      />
    </tr>
  );
};

export default TableRow;
