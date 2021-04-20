import faker from "faker";

faker.seed(123);
const database = [...Array(25)].map((_) => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  subCategory: faker.random.arrayElement([
    "Artificial flowers",
    "Balcony plants",
    "Succulents",
    "Grass Beds",
  ]),
  includeOutOfStock: faker.random.arrayElement([true, false]),
  recommended: faker.random.arrayElement([true, false]),
  rating: faker.random.arrayElement([1, 2, 3, 4, 5]),
  description: faker.commerce.productDescription(),
  image: faker.image.image(),
  discount: faker.random.arrayElement([10, 20, 30]),
}));
export default database;

// './asset_images/terrerium_image_1.png',
//       './asset_images/terrerium_image_2.png',
//       './asset_images/terrerium_image_3.png',
//       './asset_images/terrerium_image_4.png',
//       '../../asset_images/terrerium_image_5.png',
//       './asset_images/terrerium_image_6.png',
//       './asset_images/terrerium_image_7.png',
//       '.src/asset_images/terrerium_image_8.png',
//       './asset_images/terrerium_image_9.png',
