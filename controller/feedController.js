const comments = require("../model/commentsModel");

exports.postFeed = async (req, res) => {
  const { username, comment } = req.body;

  try {
    const newFeed = new comments({
      username,
      comment,
    });

    await newFeed.save();

    res.status(200).json(newFeed);
  } catch (error) {
    res.status(401).json(error);
  }
};

exports.getAllFeeds = async (req, res) => {
  try {
    const allFeeds = await comments.find();

    if (allFeeds) {
      res.status(200).json(allFeeds);
    } else {
      res.status(406).json("No comments available");
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

// delete post

exports.deleteFeed = async (req, res) => {
  const { id } = req.body;

  try {
    await comments.deleteOne({ _id: id });

    res.status(200).json("deleted");
  } catch (error) {
    res.status(401).json(error);
  }
};
