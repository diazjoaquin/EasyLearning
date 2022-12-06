const server = require('./app.js');
const { conn } = require('./db.js');

conn.sync({ force: false }).then(() => {
    server.listen(3002, () => {
      console.log("%s listening at 3002");
    });
  });