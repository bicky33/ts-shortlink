import express, { Request, Response, Router } from "express";
import { publicRouter } from "./router/public-api.router.js";

const root = Router()

root.use(express.urlencoded({extended: true}));
root.use(express.json());
root.use(publicRouter);
root.get('/test', async (req:Request, res:Response) => {
    res.status(200).send('hello')
})

export {root}
