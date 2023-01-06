const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { test } = require("./src/Routes/test/controllers.js");

conn.sync({ force: true }).then(async () => {
  await test();
  server.listen(process.env.DB_PORT, () => {
    console.log(`Server listening at ${process.env.DB_PORT}`);
  });
});
