const messages = [
  {
    id: 1,
    text: "Hello World!",
    user: "Diego",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hola Amigos!",
    user: "Barbara",
    added: new Date(),
  }
];

//@desc Get all messages
//@route GET /
export const getMessages = (req, res, next) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
};

//@desc get new message form
//@route GET /new
export const getNewMessageForm = (req, res, next) => {
  res.render("form");
};

//@desc create new message
//@route POST /new
export const createNewMessage = (req, res, next) => {
  const user = req.body.user;
  const message = req.body.message;
  const id = messages.length + 1;
  messages.push({ id: id, user: user, text: message, added: new Date() });
  res.redirect("/");
};

//@desc get message details
//@route GET /message/:id
export const getMessageDetails = (req, res, next) => {
  const id = parseInt(req.params.id);
  const message = messages.find((message) => message.id === id);

  if (!message) {
    const error = new Error(`A message with id ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  res.render("message", { message: message });
};
