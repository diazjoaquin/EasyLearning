import Server from "./server/index";

const server = Server.init(3000);
server.start(() => {
  console.log(`Server escuchando en el puerto 3000.`);
});
