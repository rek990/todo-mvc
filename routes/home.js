const express = require("express");
const router = express.Router();
// controller that the GET request on the root route ('/') below gets handed off to
const homeController = require("../controllers/home");

// GET request on main route
// router gets the controller (homeController.getIndex in this case, see above) to hand the request off to
router.get("/", homeController.getIndex);

// exports router (info in router.get())
module.exports = router;
