const mongoose = require('mongoose');
const Trip = require('../models/travlr');

// GET: /api/trips - list all trips
const tripsList = async (req, res) => {
const q = await Trip.find({}).exec();

if (!q) {
    return res.status(404).json({ message: 'No trips found' });
} else {
    return res.status(200).json(q);
}
};

// GET: /api/trips/:tripCode - get one trip by code
const tripsFindByCode = async (req, res) => {
const q = await Trip.find({ code: req.params.tripCode }).exec();

if (!q || q.length === 0) {
    return res.status(404).json({ message: 'Trip not found' });
} else {
    return res.status(200).json(q);
}
};

module.exports = {
tripsList,
tripsFindByCode
};