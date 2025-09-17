const HttpError = require("../models/errorModel");

const registerUser = async (req, res) => {
  try {
    res.json("register user");
  } catch (error) {
    return next(new HttpError(error));
  }
};

const loginUser = async (req, res) => {
  try {
    res.json("login user");
  } catch (error) {
    return next(new HttpError(error));
  }
};

const getUser = async (req, res) => {
  try {
    res.json("getUser user");
  } catch (error) {
    return next(new HttpError(error));
  }
};

const getUsers = async (req, res) => {
  try {
    res.json("get users");
  } catch (error) {
    return next(new HttpError(error));
  }
};

const updateUser = async (req, res) => {
  try {
    res.json("update user");
  } catch (error) {
    return next(new HttpError(error));
  }
};

const followUser = async (req, res) => {
  try {
    res.json("Follow user");
  } catch (error) {
    return next(new HttpError(error));
  }
};

const changeProfilePic = async (req, res) => {
  try {
    res.json("change Pic user");
  } catch (error) {
    return next(new HttpError(error));
  }
};

module.exports = {
  changeProfilePic,
  registerUser,
  updateUser,
  followUser,
  getUser,
  getUsers,
  loginUser,
};
