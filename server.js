// require("dotenv").config();
const app = require("./app");
const config = require("./app/config");
const PORT = config.app.port;
const startServer = async () => {
  try {
    await MongoDB.connect(config.app.uri);
    console.log("Connected to the database");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    console.log(`Cannot connect to the database on ${PORT}`);
  }
};
startServer();
