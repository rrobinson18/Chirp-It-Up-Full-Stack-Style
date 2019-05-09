import * as express from 'express';
import { sendEmail } from '../../utils/mailgun/mail';


const emailRouter = express.Router();


emailRouter.post('/', async (req, res, next) => {
    try {
        await sendEmail('robinson.rakesha@gmail.com', req.body.email, req.body.subject, req.body.message);
        res.send('Email sent!');
    } catch (e) {
        console.log(e);
        res.status(500);
    }
});


export default emailRouter;