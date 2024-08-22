import './InvoiceTable.css';
import TableRow from './TableRow.jsx';
import TableHeader from './TableHeader.jsx'
import AddRowButton from './AddRowButton.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';

// let globalId = 4; (did this in the backend)

const InvoiceTable = ( {initialData }) => {
  const [currentData, setCurrentData] = useState(initialData);

  const rows = currentData.map((invoiceItem) => {
    return (
      <TableRow 
        key={invoiceItem.id}
        initialInvoiceData={invoiceItem}
        initialIsEditing={false}
        deleteFunc={() => deleteRow(invoiceItem.id)}
      />
    )
  })

  useEffect(() => {
    setCurrentData(initialData);
  }, [initialData])

  // In order to give our AddRowButton the ability to add a value to 'currentData', we will need a function

  const addRow = () => {
    // create a new object to represent a new "row" or entry in the currentData array
    const newRow = {
      // id: globalId, 
      description: "Description Placeholder",
      rate: "1",
      hours: "1"
    }

    axios.post('/api/addInvoice', newRow)
    .then((response) => {
      console.log(response.data);
      setCurrentData([...currentData, response.data.newInvoice])
    })
    // Add newRow to currentData
    // globalId++;

  }

  // Delete function 
  const deleteRow = (id) => {
    axios.delete(`/api/deleteInvoice/${id}`)
    .then((response) => {
      //Need to reset currentData to the filtered array
      setCurrentData(response.data.invoices)
    })
  }

  return (
    
    <div>
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {rows}
        </tbody>
        <tfoot>
          <AddRowButton addClick={addRow} />
        </tfoot>
      </table>
    </div>
  )
}

export default InvoiceTable


