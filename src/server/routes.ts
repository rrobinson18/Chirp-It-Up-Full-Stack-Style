import * as express from 'express';
import DB from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/blogs', async (req, res) => {
    try {
        res.json(await DB.blogs.all());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/blogs/:id', async (req, res) => {
    try {
        res.json((await DB.blogs.one(req.params.id)));
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/api/blogs', async (req, res) => {
       try {
        let title = req.body.title;
        let authorid = req.body.authorid;
        let content = req.body.content;
           res.json(await DB.blogs.postBlog(title, authorid, content));
       } catch (e) {
           console.log(e);
           res.sendStatus(500);
       }
});

router.put('/api/blogs/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let title = req.body.title;
        let content = req.body.content;
        res.json(await DB.blogs.updateBlog(id, title, content));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/api/blogs/:id', async (req, res) => {
    try {
        let id = req.params.id;
        res.json(await DB.blogs.deleteBlog(id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});







export default router;