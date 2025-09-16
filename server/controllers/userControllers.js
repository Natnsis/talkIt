const HttpError = require("../models/errorModel");

const registerUser = async () => {
  try {
    res.json("register user");
  } catch (error) {
    return next(new HttpError(error));
  }
};

const loginUser = async () => {
  try {
    res.json("login user");
  } catch (error) {
    return next(new HttpError(error));
  }
};

const getUser = async () => {
  try {
    res.json("getUser user");
  } catch (error) {
    return next(new HttpError(error));
  }
};

const getUsers = async () => {
  try {
    res.json("get users");
  } catch (error) {
    return next(new HttpError(error));
  }
};

const updateUser = async () => {
  try {
    res.json("update user");
  } catch (error) {
    return next(new HttpError(error));
  }
};

const followUser = async () => {
  try {
    res.json("Follow user");
  } catch (error) {
    return next(new HttpError(error));
  }
};

const changeProfilePic = async () => {
  try {
    res.json("change Pic user");
  } catch (error) {
    return next(new HttpError(error));
  }
};
