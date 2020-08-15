const router = require("express").Router();

const verifyJwt = require("./jwt.middleware");
const {
    login,
    register,
    allUsers,
    fetchUser,
    addChat,
} = require("../controllers/user.controllers");



//register user
router.post("/register", register);

// Login user
router.post("/login", login);

//jwt verification middleware
router.use(verifyJwt);

// Fetch all users
router.get("/all-users", allUsers);

// fetch profile
router.get("/user", fetchUser);

// add chats
router.post("/chat/add", addChat);

module.exports = router;
