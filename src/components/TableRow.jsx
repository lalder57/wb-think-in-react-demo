import { useState } from "react";
import DescriptionCell from './DescriptionCell.jsx';
import RateCell from './RateCell.jsx';
import HoursCell from './HoursCell.jsx';
import ModeButtons from './ModeButtons.jsx';

const TableRow = ({ initialIsEditing, initialInvoiceData }) => {

  const {description, rate, hours} = initialInvoiceData;


  return (
    <tr>
      <ModeButtons isEditing={initialIsEditing} />
      <DescriptionCell isEditing={initialIsEditing} value={description} />
      <RateCell isEditing={initialIsEditing} value={rate} />
      <HoursCell isEditing={initialIsEditing} value={hours} />
    </tr>
  );
};

export default TableRow;
