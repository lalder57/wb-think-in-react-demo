import './InvoiceTable.css';
import DescriptionCell from './DescriptionCell.jsx';

import ModeButtons from './ModeButtons.jsx';

const InvoiceTable = () => {
  return (
    <div>
      InvoiceTable goes Here
      <DescriptionCell isEditing={false} value={"My description"}/>
    </div>
  )
}

export default InvoiceTable


