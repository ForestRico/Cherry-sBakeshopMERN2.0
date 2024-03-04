import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router.js';
import userRouter from './routers/user,router.js';

const app = express();
// Since we're using 'req.body' and want to send our data to the server as JSON, we need to tell express to use JSON as the body
// This code parses JSON body
app.use(express.json());

app.use(cors({
    credentials:true,
    origin: ['http://localhost:3000'],
})
);

// Front end is already running on port3000, backend must run on a separate port (5000)

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);


const PORT = 5000;
app.listen(PORT, () => {
    console.log('listening on port' + PORT);
});