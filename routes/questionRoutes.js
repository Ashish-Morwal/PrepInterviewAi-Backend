const express = require("express");
const {
  togglePinQuestion,
  addQuestionsToSession,
} = require("../controllers/questionController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/add", protect, addQuestionsToSession);
router.post("/:id/pin", protect, togglePinQuestion);

module.exports = router;
