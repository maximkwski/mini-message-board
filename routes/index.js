import express from "express";

const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Hola Amigos!",
    user: "Diego",
    added: new Date()
  }
];

router.get('/', (req, res) => {
    res.render('index', { title: "Mini Messageboard", messages: messages })
})

export default router;