const mongoose = require("mongoose");

const connectionString = "mongodb+srv://admin:deAdmin@cluster0.4iat3.mongodb.net/dnd-reference-builder?retryWrites=true&w=majority";

mongoose.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
