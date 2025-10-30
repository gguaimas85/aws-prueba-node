const { getLogin } = require("../services/loginService");

exports.readLogin = (req, res) => {
  console.log("Controller Login");

  res.status(200).send(getLogin("mail@gmail.com", "1234"));
};

