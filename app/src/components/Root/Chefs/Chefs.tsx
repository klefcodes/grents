import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import * as React from "react";

// AddRestaurant Component
import AddRestaurant from "./AddRestaurant";

// Styled Component
import {
  Chef,
  ChefName,
  Restaurant,
  Restaurants,
  Wrapper,
} from "./styled-chef";
// Interface
import QueryData from "./interface-chef";
import createRestuarantData from "./interface-chef";

const query = gql`
  {
    chefs {
      id
      name
      restaurants {
        id
        name
      }
    }
  }
`;

const createRestaurantMutation = gql`
  mutation($chef_id: ID!, $name: String!) {
    createRestaurant(chef_id: $chef_id, name: $name) {
      id
      name
    }
  }
`;

const Chefs = () => {
  const { data, loading, refetch } = useQuery<QueryData>(query);
  const [createRestaurant] = useMutation<createRestuarantData>(
    createRestaurantMutation
  );

  return (
    <Wrapper>
      {loading ? "Loading.." : ""}
      {data &&
        data.chefs.map((chef) => (
          <Chef key={chef.id}>
            <ChefName>{chef.name}</ChefName>
            <Restaurants>
              {chef.restaurants.map((restaurant) => (
                <Restaurant key={restaurant.id}>{restaurant.name}</Restaurant>
              ))}
              <AddRestaurant
                onAddRestaurant={async ({ name }) => {
                  await createRestaurant({
                    variables: { chef_id: chef.id, name },
                  });
                  refetch();
                }}
              />
            </Restaurants>
          </Chef>
        ))}
    </Wrapper>
  );
};

export default Chefs;
