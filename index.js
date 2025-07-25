const express = require('express');
const giveMeAJoke = require('give-me-a-joke');
const app = express();
const path = require('path');
const port = process.env.port || 23007;
app.use(express.static(path.join(__dirname, 'public')));


app.get('/giveMeJoke', (req, res) => {
    console.log("Joke enter");
    try {
        console.log("Joke start");
        giveMeAJoke.getRandomDadJoke (function(joke) {
            res.send(joke);
            console.log("Joke");
        });
    } catch(error) {
        res.send(error);
        console.log("error");
    }
});

app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'app.html'));
});

app.listen(port, () => {
    console.log("Listening port 23007");
});
