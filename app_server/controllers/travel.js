const Trip = require('../../app_api/models/travlr');

const travel = async (req, res) => {
try {
    const trips = await Trip.find().exec();
    res.render('travel', { title: 'Travlr Getaways', trips: trips });
} catch (err) {
    res.status(500).send(err.message);
}
};

module.exports = {
travel
};