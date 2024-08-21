import './InvoiceTable.css';
import TableRow from './TableRow.jsx';
import TableHeader from './TableHeader.jsx'
import AddRowButton from './AddRowButton.jsx'


const InvoiceTable = ( {initialData }) => {

  console.log("INITIAL DATA:", initialData);
  return (
    
    <div>
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <TableRow 
            initialIsEditing={false}
            initialInvoiceData={initialData[0]}
            />
            <TableRow 
            initialIsEditing={false}
            initialInvoiceData={initialData[1]}
            />
            <TableRow 
            initialIsEditing={false}
            initialInvoiceData={initialData[2]}
            />
            <TableRow 
            initialIsEditing={false}
            initialInvoiceData={initialData[3]}
            />

        </tbody>
        <tfoot>
          <AddRowButton />
        </tfoot>
      </table>
    </div>
  )
}

export default InvoiceTable


