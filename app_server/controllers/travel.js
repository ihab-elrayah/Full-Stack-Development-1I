const mongoose = require('mongoose');
// Set debug mode
mongoose.set('debug', true);

// Define the model
const Model = mongoose.model('trips');

// GET: /trips - Lists all the trips
const tripsList = async (req, res) => {
  Model.find({}) // Empty filter for all
    .exec((err, trips) => {
      if (err) {
        return res
          .status(500) // Changed to 500 to indicate server error
          .json(err);
      }
      if (!trips) {
        return res
          .status(404)
          .json({ "message": "Trips not found" });
      } else {
        return res
          .status(200)
          .json(trips);
      }
    });
};

// GET: /trips/:tripCode - Returns a single trip
const tripsFindByCode = async (req, res) => {
  Model.findOne({ 'code': req.params.tripCode }) // Changed to findOne for a single document
    .exec((err, trip) => {
      if (err) {
        return res
          .status(500) // Changed to 500 to indicate server error
          .json(err);
      }
      if (!trip) {
        return res
          .status(404)
          .json({ "message": "Trip not found" });
      } else {
        return res
          .status(200)
          .json(trip);
      }
    });
};

// Export the routes
module.exports = { tripsList, tripsFindByCode };
