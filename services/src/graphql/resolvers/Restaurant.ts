import { Restaurant, Menu } from "#root/db/models";

const resolvers = {
  menu: (restaurant: Restaurant) => {
    return Menu.findAll({
      include: [{ model: Restaurant, where: { id: restaurant.id } }],
    });
  },
};

export default resolvers;
