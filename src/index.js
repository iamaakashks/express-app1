import express from 'express';
import {router} from './routes/userRoutes.js'
const app = express();

app.use(express.json());
app.use('/users', router);
app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({error: err.message});
})

app.get("/", (req, res)=>{
    res.cookie(
        'hello',
        'world',
        {maxAge: 6000}
    )
    res.status(201).send({msg: "default home page"})
})
app.get("/set-cookie", (req, res)=>{
    res.cookie('username', 'john_doe', {maxAge:10000});
    res.send('Cookie has been set')
})

app.listen(3000, ()=>{
    console.log(`live at local port 3000`)
})