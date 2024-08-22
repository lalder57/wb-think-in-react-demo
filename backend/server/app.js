import express from 'express';
import morgan from 'morgan';  // Helps with logging for debugging; not necessary
import ViteExpress from 'vite-express';


// Set up an express instance for 'app'
const app = express ();

// Set up middleware
app.use(morgan('dev')) // while in the dev environment, use morgan for additional logging, etc. 
app.use(express.urlencoded({ extended: false}))  // Allows express to interpret body objects from POST requests
app.use(express.static('public')) // for certain imports, check the 'public' directory first
app.use(express.json()) // lets server and front-end know that they'll be communicating with JSON

import handlerfunctions from './controller.js';
// Routes:
// Before creating endpoints, address the following:
// - What is the purpose of this endpoint
// - Will I need any queries/param/body objects? 
// - What will the endpoint string look like? (url)
// - What should the response look like? (keep consistent)

// First endpoint (GET): 
// - To serve up an array of our invoice objects (TEST_DATA)
// - No additional client information needed
// - '/api/invoices' (--> full URL here when hosted locally: http://localhost:2319/api/invoices)
// - { message: "", invoices: [] } res.send({ message: "", invoices: [] })

app.get('/api/invoices', handlerfunctions.getInvoices)
 
// 2nd endpoint (POST):
// - Add a new row to our invoice data array
// - Body object: 
//    -- description, rate, hours
// - '/api/addInvoice
// - Send back the new object with a mesage 
//    -- { message: "", newInvoice: {} }

app.post('/api/addInvoice', handlerfunctions.addInvoice)

// 3rd endpoint (DELETE):
// - Delete a specific invoice from TEST_DATA
// - Need 'id' from req.params
// - 'api/deleteInvoice/:id 
// - { message: "", invoices: [] } -- (invoices = updated TEST_DATA after deleting)

app.delete('/api/deleteInvoice/:id', handlerfunctions.deleteInvoice)


// 4th endpoint (PUT):
// - Update rate and/or description and/or hours on a specific invoice object
// - Body - { id, description, rate, hours}
// - '/api/editInvoice'
// - { message: "", updatedInvoice: {} } 

app.put('/api/editInvoice', handlerfunctions.editInvoice)
// Open up door to server
ViteExpress.listen(app, 2319, () => console.log("We've got a 23-19! Report to http://localhost:2319"))


