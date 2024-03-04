import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router.js';

const app = express();

app.use(cors({
    credentials:true,
    origin: ['http://localhost:3000'],
})
);

// Front end is already running on port3000, backend must run on a separate port (5000)

app.use('/api/foods', foodRouter);


const PORT = 5000;
app.listen(PORT, () => {
    console.log('listening on port' + PORT);
});