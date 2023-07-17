import express from 'express';
import restRouter from '../routes/rest.js';

const app = express();
const port = 3000;


export const startRest = ()=>{

    app.use(express.json());
    app.use(restRouter);


    app.listen(port, ()=>{
        console.log(`REST app started at port =  ${port}`);
    })

}