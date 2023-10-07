import express from "express";
import axios from "axios";
const app = express();

const port = 5000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Programming,Spooky?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single");
        const joke = result.data.joke;
        res.render("index.ejs", {
            joke: joke,
        });
        
    } catch (error) {
        console.log(error.message.data);   
    }
})

app.listen(port, (err) => {
    if (err) {
        console.log("Something went wrong " + err);
    }

    console.log("we're lesening at port " + port);
})