const mongoose = require("mongoose");

const Role = mongoose.model(
    "Role",
    new mongooseSchema({
        name: String,
    })
);


module.exports = Role;
