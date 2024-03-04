import { Router } from 'express';
import { sample_user } from '../data.js';
import { BAD_REQUEST } from '../constants/httpStatus.js';

const router = Router ();

// Utilising req.param would show up in the URL, use req.body 
router.post('/login', (req, res) => {
    const { email, password } = req.body; 
    // Using the 'find' function to search whether the input email and password matches one in the sample database 
        const user =  sample_user.find(
            user => user.email === email && user.password === password
        );
    
    if(user){
        res.send(generateTokenResponse(user));
        return;
    }
    
    res.status(BAD_REQUEST).send('Username or Password is Invalid');
});

const generateTokenResponse = user => {
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        'FinalProject',
        {
            expiresIn: '30d'
        }
    );

    return {
        id: user.id,
        email: user.email,
        name: user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token,
    };
};

export default router;