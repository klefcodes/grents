interface Chef {
  id: string;
  name: string;
  restaurants: Restaurant[];
}

export default interface QueryData {
  chefs: Chef[];
}

interface Restaurant {
  id: string;
  name: string;
}

export default interface createRestuarantData {
  chef_id: string;
  name: string;
}
