import express from "express";
import {
  getMessages,
  getNewMessageForm,
  createNewMessage,
  getMessageDetails,
} from "../controllers/messageController.js";

const router = express.Router();

//get all messages
router.get("/", getMessages);

router.get("/new", getNewMessageForm);

router.post("/new", createNewMessage);

router.get("/message/:id", getMessageDetails);

export default router;
