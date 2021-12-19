const UserModel = require("../models/User");

exports.createUser = async (req, res, next) => {
  try {
    const createUser = await UserModel.create(req.body);
    res.status(201).json(createUser);
  } catch (err) {
    next(err);
  }
};
