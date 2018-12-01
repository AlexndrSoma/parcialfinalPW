const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    id: String,
    marca: String,
    modelo: String,
    t_vida: String
});

module.exports = mongoose.model('task', TaskSchema);