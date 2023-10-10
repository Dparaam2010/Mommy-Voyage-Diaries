const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tipsSchema = new Schema({
    location: {type: String, required: true},
    length: {type: Number},
    notes: {type: String},
    date: {type: Date},    
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
}, {
    timestamps: true,
})



module.exports = mongoose.model('Tips', tipsSchema);