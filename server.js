const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corOptions = {
    origin: "http://localhost:8081",
};

app.use(cors(corOptions));

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const dbConfig = require("./app/config/db.config");
const Role = db.role;

db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
        initial();
    })
    .catch((err) => {
        console.error("Connection error", err);
        process.exit();
    });

function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user",
            }).save((err) => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'user' to roles collection");
            });

            new Role({
                name: "moderator",
            }).save((err) => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'moderator' to roles collection");
            });

            new Role({
                name: "admin",
            }).save((err) => {
                if (err) {
                    console.log("error", err);
                }

                console.log("added 'admin' to roles collection");
            });
        }
    });
}

app.get("/", (req, res) => {
    res.json("Welcome to my application");
});

const PORT = process.env.PORT || 8080;

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

app.listen(PORT, () => {
    console.log("server ready");
});
