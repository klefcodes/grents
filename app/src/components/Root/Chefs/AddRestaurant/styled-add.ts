import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0.25rem 0;
`;

export const AddRestaurantButton = styled.button`
  border: 0.0625rem dashed #aaa;
  color: #555;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.25rem;

  :hover {
    cursor: pointer;
  }
`;

export const TextField = styled.input`
  border: 0;
  border-bottom: 0.125rem solid #ccc;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.25em;

  :focus {
    border-bottom-color: #aaa;
    outline: none;
  }
`;

export default [Wrapper, AddRestaurantButton, TextField];
