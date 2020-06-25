const mongoose = require('mongoose');
const schema = mongoose.Schema;

const groupsSchema = new schema({
    name: {
        type: String,
        required: true
    },
    mission: {
        type: String,
        default: "Let there be light."
    },
    logo: {
        type: Buffer,
    },
    created: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        default: null,
        required: true
    },
    genre: {
        type: String,
    },
    owner: {
        type: String,
    },
    memberCount: {
        type: Number,
        default: 1
    },
    location: {
        type: String,
    },
    banner: {
        type: Buffer,
    },
    pending: {
        type: String,
        default: JSON.stringify([])
    },
    handler: {
        type: String,
        unique: true,
    },
    members: {
        type: String,
        default: JSON.stringify([])
    },
    media: [
        {
            facebook: {
                type: String
            },
            twitter: {
                type: String
            },
            youtube: {
                type: String
            },
            instagram: {
                type: String
            },
            website: {
                type: String
            }
        }
    ]
});

module.exports = mongoose.model('group', groupsSchema); 