const router = require("express").Router();
const {
  changeProfilePic,
  registerUser,
  updateUser,
  followUser,
  getUser,
  getUsers,
  loginUser,
} = require("../controllers/userControllers");

router.post("/users/register", registerUser);
router.post("/users/login", loginUser);
router.get("/users/:id", getUser);
router.get("/users/", getUsers);
router.patch("/users/:id", updateUser);
router.post("/users/avatar", changeProfilePic);
router.get("/users/:id/follow-unfollow", followUser);

module.exports = router;
