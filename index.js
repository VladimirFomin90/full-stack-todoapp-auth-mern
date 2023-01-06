const express = require("express");
const moongoose = require("mongoose");

const app = express();
const port = 3003;

async function start() {
    try {
        await moongoose.connect(
            "mongodb+srv://admin:admin@mern-todo-app.zyux4yn.mongodb.net/?retryWrites=true&w=majority"
        );
    } catch (error) {
        console.error(error);
    }

    app.listen(port, () => {
        console.log(`server started on ${port}`);
    });
}

start();
