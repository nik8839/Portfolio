const express = require("express");
const { sendEmailController } = require("../controllers/portFolioController");

const router = express.Router();

router.post("/sendEmail", sendEmailController);

module.exports = router;
