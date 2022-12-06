import Server from "./src/server/index";

const server = Server.init(3000);
server.start(() => {
  console.log(`Server escuchando en el puerto 3000.`);
});
