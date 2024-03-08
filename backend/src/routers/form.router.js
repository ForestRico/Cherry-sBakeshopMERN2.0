import { Router } from 'express';
import express from 'express';
import Form from '../../models/formSchema.js';


const router = Router();

// app.use('/form', formRouter);

// app.get('/', (req,res) => {
//     res.status(200).send('<h1>hi<h1>')
// })

// router.post('/order', async (req, res) => {
//     try {
//         // Extract form data from the request body
//         const formData = req.body;

//         // Log the received data
//         console.log('Data received:', formData);

//         // Respond with a success message
//         res.status(200).send('Data received successfully');
//     } catch (error) {
//         // Handle any errors and respond with an error message
//         console.error('Error receiving data:', error);
//         res.status(500).send('Failed to receive data');
//     }
// });

router.post('/', async (req, res) => {
    try {
        // Extract form data from the request body
        const { email, address, occasion, firstName, lastName, message, pickUpDate, pickUpTime, phoneNumber } = req.body;

        // Create a new form instance
        const form = new Form({
            email,
            address,
            occasion,
            first_name: firstName,
            last_name: lastName,
            message,
            pickup_date: pickUpDate,
            pickup_time: pickUpTime,
            phone_number: phoneNumber
        });

        // Save the form to the database
        const savedForm = await form.save();

        // Respond with a success message and the saved form
        res.status(201).json({ success: true, message: 'Your Form Was Submitted Successfully', form: savedForm });
    } catch (error) {
        // Handle any errors and respond with an error message
        console.error('Error submitting form:', error);
        res.status(500).json({ success: false, message: 'Failed To Submit Form' });
    }
});

// module.exports = router;
export default router;
