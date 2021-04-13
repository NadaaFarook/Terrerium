import { createServer, Model, RestSerializer } from "miragejs";
import database from './database'

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      product: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("products");
    },

    seeds(server) {
    database.map(data=> {
      return(
        server.create('product' , data)
      )
    })
      //server.create("product", { id: 1, name: "Ram" });
      // server.create("user", { id: 2, name: "Shyam" });
    }
  });
}
//console.log(database)