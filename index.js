const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.get("/", function(req, res) {
	res.send("MongoDB here")
})

app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.route"));

async function start() {
    try {
        await mongoose.connect(
            "mongodb+srv://vladimir:uA9-K9g-pFB-4LG@mern-todo-app.zyux4yn.mongodb.net/?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				useFindAndModifyIndexOptions: true,
			}
        );
    } catch (err) {
        console.error(err);
    }

    app.listen(port, () => {
        console.log(`server started on ${port}`);
    });
}

start();
