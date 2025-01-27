// first npm init -y
// then npm install express (server library??)
// then import the express library
import express from "express";

// execute the express library and storing it in a variable called app, which is basically a new express application inside our code called app
const app = express();

// this sets up the GET route at localhost:3000/messages. once it gets a request, it will give a response in JSON back to the client. So the /messages route will handle GET requests. When a request is received at that /messages url, the callback function is called and will send a JSON response back to client.
app.get("/messages", function (request, response) {
  response.json({ message: "Hello world" });
});

// like an event listener we are telling our app to listen to requests on a certain port
app.listen(3000, function () {
  console.log("server is listening on port 3000");
});
