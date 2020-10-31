var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
import { eventTestData } from '../eventTestData';
import { CreateEvent, ICreateEventReqBody } from '../models/calendar';
router.get('/getAllEvents', function (req: any, res: any) {
    res.send('GET route on things.');
});


router.post('/createEvent', (req: any, res: any) => {
    const requestData: ICreateEventReqBody = req.body;
    const eventObj = new CreateEvent({
        start: {
            dateTime: requestData.start,
            timeZone: 'Asia/kolkata'
        },
        summary: requestData.title,
        hangoutLink: requestData.hangoutLink,
        description: requestData.description,
        end: {
            dateTime: requestData.end,
            timeZone: 'Asia/kolkata'
        },
        organizer: {
            email: requestData.organizerEmail,
            self: true
        }
    });

    const createEventData = new CreateEvent(eventObj);
    createEventData.save((err: any) => {
        if (err) {
            res.send('Database Error');
        } else {
            res.status(200).send({ msg: 'Event Added Successful' });
        }
    });
})

module.exports = router;