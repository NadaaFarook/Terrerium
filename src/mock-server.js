import { createServer, Model, RestSerializer } from "miragejs";
import faker from "faker";

faker.seed(123);

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
      [...Array(50)].forEach((_) => {
        server.create("product", {
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          subCategory: faker.random.arrayElement([
            "Artificial flowers",
            "Balcony plants" , 
            "Succulents" ,
            "Grass Beds"
          ]),
          rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
          description: faker.commerce.productDescription(),
          image: faker.image.abstract(),
          imageList: [...Array(4)].map((item) => faker.image.abstract()),
          discount: faker.random.arrayElement([50, 60, 70, 80])
        });
      });
    }
  });
}
