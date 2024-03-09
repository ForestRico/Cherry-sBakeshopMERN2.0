import { Router } from 'express';
import express from 'express';
import Form from '../../models/formSchema.js'


const router = Router();

router.get('/', async (req, res) => {
    try {
        // Create a new form instance
        const forms = await Form.find()
        res.send(forms);

    } catch (error) {
        // Handle any errors and respond with an error message
        console.error('Error submitting form:', error);
        res.status(500).json({ success: false, message: 'Failed To Submit Form' });
    }
});

router.post('/', async (req, res) => {
    try {
        // Extract form data from the request body
        const { userID, email, address, occasion, firstName, lastName, message, pickUpDate, pickUpTime, phoneNumber } = req.body;

        // Create a new form instance
        const form = new Form({
            userID,
            email,
            address,
            occasion,
            first_name: firstName,
            last_name: lastName,
            message,
            pickup_date: pickUpDate,
            pickup_time: pickUpTime,
            phone_number: phoneNumber,
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

router.delete('/', async (req, res) => {
    try {

        const {formID} = req.body

        // Delete Form
        const forms = await Form.findOneAndDelete({ _id: formID })
        res.send({deleted: true, form: forms})
        
    } catch (error) {
        // Handle any errors and respond with an error message
        console.error('Error submitting form:', error);
        res.status(500).json({ success: false, message: 'Failed To Submit Form' });
    }
});

router.put('/', async (req, res) => {
    try {

        const {id} = req.body

        // Delete Form
        const forms = await Form.findOneAndUpdate({ _id: id }, {...req.body})
        res.send({updated: true, form: forms})
        
    } catch (error) {
        // Handle any errors and respond with an error message
        console.error('Error submitting form:', error);
        res.status(500).json({ success: false, message: 'Failed To Submit Form' });
    }
});

export default router;