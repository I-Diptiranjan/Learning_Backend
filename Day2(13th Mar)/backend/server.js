import express from "express";

const app = express();
const PORTNO = 3000;

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/jokes", (req, res) => {
  //create a jokes array with id , title and content
  const jokes = [
    {
      id: 1,
      title: "Joke one",
      content: "This is Joke One!",
    },
    {
      id: 2,
      title: "Joke two",
      content: "This is Joke two!",
    },
    {
      id: 3,
      title: "Joke three",
      content: "This is Joke three!",
    },
    {
      id: 4,
      title: "Joke four",
      content: "This is Joke four!",
    },
    {
      id: 5,
      title: "Joke five",
      content: "This is Joke five!",
    },
  ];

  res.send(jokes);
});

app.listen(PORTNO, () => {
  console.log("server is Listening");
});
