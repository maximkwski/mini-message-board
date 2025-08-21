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

//get message form
router.get("/new", getNewMessageForm);

//create new message
router.post("/new", createNewMessage);

//get message details
router.get("/message/:id", getMessageDetails);

export default router;
