import styled from "styled-components";

export const Chef = styled.div`
  margin-bottom: 1rem;
`;

export const ChefName = styled.strong`
  font-size: 1.5rem;
`;

export const Restaurant = styled.span`
  background-color: #eee;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.25em;
  margin: 0.25rem 0.5rem 0.25rem 0;
`;

export const Restaurants = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 0.5rem;
`;

export const Wrapper = styled.div``;

export default [Chef, ChefName, Restaurant, Restaurants, Wrapper];
