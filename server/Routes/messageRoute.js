const express = require("express");
const { CreateMessage, getMessages } = require("../Controllers/messageController");

const router = express.Router();

router.post("/", CreateMessage);
router.get("/:chatId", getMessages);


module.exports = router;
