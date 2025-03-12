const express = require("express");
const app = express();
const PORT = 3000;
const data = require("./data.json");

app.listen(PORT, () => {
  console.log(`👋 Started server on port ${PORT}`);
});

app.get("/", (request, response) => {
  response.send(
    "Welcome to my Whatever! You can go to: /about , /contact or /uchoose/..."
  );
});

app.get("/about", (request, response) => {
  response.send("There is nothing about me!");
});
app.get("/contact", (request, response) => {
  response.send("You can always try to contact me!");
});

app.post("/contact", (request, response) => {
  response.send("Your message has been sent! We'll probably never answer you!");
});

app.get("/uchoose/:id", (request, response) => {
  const whateverId = request.params.id;

  response.send(`You chose whatever with the ID of ${whateverId}`);
});

app.get("/data", (request, response) => {
  response.send(
    "The product name is " +
      data.title +
      " and the description is " +
      data.description
  );
});
