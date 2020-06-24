import { Menu } from "#root/db/models";

const menuResolver = () => {
  return Menu.findAll();
};

export default menuResolver;
