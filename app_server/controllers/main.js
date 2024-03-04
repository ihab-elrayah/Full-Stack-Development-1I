/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways' });
   };
   module.exports = {
    travel
   };


   const mongoose = require('mongoose');

// Set debug mode
mongoose.set('debug', true);

// Define the model
const TripModel = mongoose.model('Trip', new mongoose.Schema({ /* schema definition */ }));

// GET: /trips - Lists all the trips
const listTrips = async (req, res) => {
  try {
    const trips = await TripModel.find({}); // Empty filter for all trips
    if (!trips.length) {
      return res.status(404).json({ message: "Trips not found" });
    }
    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// GET: /trips/:tripCode - Returns a single trip
const findTripByCode = async (req, res) => {
  try {
    const trip = await TripModel.findOne({ code: req.params.tripCode });
    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }
    return res.status(200).json(trip);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Export the routes
module.exports = { listTrips, findTripByCode };
