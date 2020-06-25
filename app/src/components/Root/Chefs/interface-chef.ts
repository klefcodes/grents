interface Chef {
  id: string;
  name: string;
  restaurants: Restaurant[];
}

interface QueryData {
  chefs: Chef[];
}

interface Restaurant {
  id: string;
  name: string;
}

export default QueryData;
