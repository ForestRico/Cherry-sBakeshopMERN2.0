const express = require('express');
const router = express.Router();

// Middleware to parse JSON and urlencoded request bodies
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Route handler for processing form submission
router.post('/', (req, res) => {
    console.log(req.body); // Log form data received from the frontend
    // Process the form data and send response as needed
    res.send('Form submission successful!');
});

module.exports = router;
