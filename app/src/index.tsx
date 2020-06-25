import * as React from "react"
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom"
import { createGlobalStyle } from "styled-components"

import graphqlClient from './api/graphql'
import Root from "./components/Root"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    body {
        font-family: 'Montserrat', sans-serif;
    }
`

render(
    <ApolloProvider client={graphqlClient}>
        <GlobalStyle />
        <Root />
    </ApolloProvider>,
    document.getElementById("app")
)