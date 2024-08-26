const trips = require("../model/hostTripModel");

//host a trip
exports.hostTrip = async (req, res) => {
  const {
    username,
    title,
    startingpoint,
    destination,
    startdate,
    enddate,
    price,
    people,
    description,
  } = req.body;

  try {
    const newTrip = new trips({
      username,
      title,
      startingpoint,
      destination,
      startdate,
      enddate,
      price,
      people,
      description,
    });

    await newTrip.save();

    res.status(200).json(newTrip);
  } catch (error) {
    res.status(401).json(error);
  }
};

//get all trip
exports.getAllTrip = async (req, res) => {
  const searchKey = req.query.search;

  try {
    const query = {
      destination: { $regex: searchKey, $options: "i" },
    };
    const allTrips = await trips.find(query);

    if (allTrips) {
      res.status(200).json(allTrips);
    } else {
      res.status(406).json("No trip Available");
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

// delete trip

exports.deleteTrip = async (req, res) => {
  const { id } = req.body;

  try {
    await trips.deleteOne({ _id: id });

    res.status(200).json("deleted");
  } catch (error) {
    res.status(401).json(error);
  }
};

//search trip : destination

exports.searchTripController = async (req, res) => {
  const searchKey = req.query.search;
  // console.log(searchKey);

  try {
    const query = {
      destination: { $regex: searchKey, $options: "i" },
    };

   const allTrips = await trips.find(query);

    if (allTrips) {
      res.status(200).json(allTrips);
    } else {
      res.status(406).json("No trip Available");
    }
  } catch (error) {
    res.status(401).json(error);
  }
};
