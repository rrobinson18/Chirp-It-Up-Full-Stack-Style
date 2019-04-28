import * as express from 'express';

import DB from '../../db';

const router = express.Router();

const isAdmin: express.RequestHandler = (req, res, next) => {
    if(!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401);
    } else {
        return next();
    }
};

router.get('/api/blogs', async (req, res) => {
    try {
        res.json(await DB.blogs.all());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/blogs/:id', isAdmin, async (req, res) => {
    try {
        let [blog] = await DB.blogs.one(req.params.id);
        res.json(blog);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;