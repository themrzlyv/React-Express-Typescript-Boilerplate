import express, { Router } from 'express';

const routes:Router = Router();

routes.get('/api/hello', (req, res, next) => {
    res.json('World');
});

export default routes;