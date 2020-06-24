import { Restaurant } from "#root/db/models";

const restaurantsResolver = () => {
  return Restaurant.findAll();
};

export default restaurantsResolver;
