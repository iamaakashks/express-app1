import express from 'express';
import {router} from './routes/userRoutes.js'
const app = express();

app.use(express.json());
app.use('/users', router);
app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({error: err.message});
})


app.listen(3000, ()=>{
    console.log(`live at local port 3000`)
})