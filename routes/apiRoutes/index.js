const router = require("express").Router();
const animalRoutes = require("../apiRoutes/notesRoutes");

router.use(animalRoutes);

module.exports = router;
