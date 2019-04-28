import * as express from 'express';
import DB from '../db';

import authRouter from './auth';
import apiRouter from './api';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});





router.post('/api/blogs', async (req, res) => {
       try {
        let title = req.body.title;
        let authorid = req.body.authorid;
        let content = req.body.content;
        //insert into blogs, get the blogid
          let { insertId }: any = await DB.blogs.postBlog(title, content, authorid);
        //insert into blogtags with that blogid and the tagid from front-end
          await DB.blogtags.insertBlogTag(insertId, req.body.tagid);
           res.json('Blog added!');
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


router.get('/api/blogtags/:blogid', async (req, res) => {
    try {
        let blogid = req.params.blogid;
        res.json(await DB.blogtags.getBlogTags(blogid))
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});


router.get('/api/tags', async (req, res, next) => {
    try {
        let tags = await DB.tags.getAll();
        res.json(tags);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

router.use('/auth', authRouter);
router.use('/api', apiRouter);

export default router;