import { Server } from "./server";

const server = new Server().express;
const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`server online in port ${PORT}`);
})
