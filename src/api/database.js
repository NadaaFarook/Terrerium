

  import faker from "faker";

faker.seed(4);
 const database = [...Array(25)].map((_) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    subCategory: faker.random.arrayElement([
      "Artificial flowers",
      "Balcony plants" , 
      "Succulents" ,
      "Grass Beds"
    ]),
   includeOutOfStock : faker.random.arrayElement([true , false]),
    recommended : faker.random.arrayElement([true , false]),
    rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
    description: faker.commerce.productDescription(),
    image: faker.random.image(),
    imageList: [...Array(4)].map((item) => faker.image.abstract()),
    discount: faker.random.arrayElement([50, 60, 70, 80])
  }
));
export default database