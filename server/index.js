const server = require("./src/app.js");
require("dotenv").config();
const { conn } = require("./src/db.js");
const { test } = require("./src/Routes/test/controllers.js");
const port = process.env.PORT || 3001;

conn.sync({ force: false }).then(async () => {
  await test();
  server.listen(port, () => {
    console.log(`Server listening at ${port}`);
  });
});
