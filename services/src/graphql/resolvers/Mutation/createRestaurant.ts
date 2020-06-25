import { Restaurant } from "#root/db/models";

const createRestaurantResolver = (
  context: any,
  { chef_id, name }: { chef_id: number; name: string }
) => {
  return Restaurant.create({ chef_id, name });
};

export default createRestaurantResolver;
