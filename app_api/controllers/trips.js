const tripsUpdateTrip = async (req, res) => {
    getUser(req, res, (req, res) => {
        Trip.findOneAndUpdate({ 'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, { new: true })
        .then(trip => {
            if (!trip) {
                return res.status(404).send({
                    message: "Trip not found with code " + req.params.tripCode
                });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Trip not found with code " + req.params.tripCode
                });
            }
            return res.status(500).json(err); // Server error
        });
    });
}
