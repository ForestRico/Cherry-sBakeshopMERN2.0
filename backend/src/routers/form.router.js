import { Router } from 'express';
import express from 'express';
import Form from '../../models/formSchema.js';


const router = Router();

app.use('/form', formRouter);


router.get('/form', async (req, res) => {
    try {
      // Fetch form data from the database
      const forms = await Form.find();
      
      // Respond with the fetched forms
      res.status(200).json({ success: true, forms: forms });
    } catch (error) {
      // Handle any errors and respond with an error message
      console.error('Error fetching forms:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch forms' });
    }
  });

router.post('/form', async (req, res) => {
    try {
        // Extract form data from the request body
        const { email, address, occasion, firstName, lastName, message, pickUpDate, pickUpTime, phoneNumber } = req.body;

        // Create a new form instance
        const form = new Form({
            email,
            address,
            occasion,
            firstName,
            lastName,
            message,
            pickUpDate,
            pickUpTime,
            phoneNumber
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

module.exports = router;
// export default router;
