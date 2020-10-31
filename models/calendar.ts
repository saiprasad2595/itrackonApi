var mongoose = require('mongoose');
const createEventSchema = mongoose.Schema({
    attendees: Array,
    conferenceData: Object,
    created: Date,
    creator: Object,
    description: String,
    end: Object,
    etag: String,
    hangoutLink: String,
    htmlLink: String,
    iCalUID: String,
    id: String,
    kind: String,
    location: String,
    organizer: Object,
    recurrence: Array,
    reminders: Object,
    result: Object,
    sequence: Boolean,
    start: Object,
    status: String,
    summary: String,
    updated: String
});
export const CreateEvent = mongoose.model("CreateEvent", createEventSchema);

export interface ICreateEventReqBody {
    title: string;
    speaker: string;
    organizerEmail: string;
    start: string;
    end: string;
    description: string;
    hangoutLink: string;
}