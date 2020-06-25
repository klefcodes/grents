import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag'
import * as React from 'react'

// Styled Component 
import { Chef, ChefName, Restaurant, Restaurants, Wrapper } from "./styled-chef"
// Interface
import QueryData from './interface-chef'


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
`

const Chefs = () => {
    const { data, loading } = useQuery<QueryData>(query)

    return (
        <Wrapper>
            {loading ? "Loading.." : ""}
            {data && data.chefs.map(chef => (
                <Chef key={chef.id}>
                    <ChefName>{chef.name}</ChefName>
                    <Restaurants>
                        {chef.restaurants.map(restaurant => (
                            <Restaurant key={restaurant.id}>{restaurant.name}</Restaurant>
                        ))}
                    </Restaurants>
                </Chef>
            ))}
        </Wrapper>
    )
}

export default Chefs
