import express from "express";

const router = express.Router();

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  { 
    id: 3,
    text: "Hola Amigos!",
    user: "Diego",
    added: new Date()
  }
];

router.get('/', (req, res) => {
    res.render('index', { title: "Mini Messageboard", messages: messages })
})

router.get('/new', (req, res) => {
  res.render('form')
})

router.post('/new', (req, res) => {
  const user = req.body.user;
  const message = req.body.message;
  const id = messages.length + 1;
  messages.push({id: id, user: user, text: message, added: new Date()})
  res.redirect("/")
})

router.get('/message/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const message = messages.find((message) => message.id === id);

  if (!message) {
    const error = new Error(`A message with id ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  res.render('message', { message: message });
  
})

export default router;