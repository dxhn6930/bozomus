const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    icon: { type: String },
    audio: { type: String },
    title: { type: String },
},{
    timestamps: true
})

module.exports = mongoose.model('Music', schema)