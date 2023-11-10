import gql from 'graphql-tag'
import React from 'react'
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from 'apollo-boost'
//import { ApolloLink } from '@apollo/client';
import { useQuery, ApolloProvider } from 'react-apollo'
import { Card } from 'react-onsenui'


const httpLink = new HttpLink({
    uri: 'https://cronify.hasura.app/v1/graphql',
    credentials: 'include',
    headers: { 'x-hasura-role': 'cronify' }
  })

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }) => ({ headers: {
    ...headers,
    authorization: 'Bearer ' + localStorage.getItem('hasuraToken')
  }}))
  console.log(`Token updated for Operation ${operation.operationName}.`)
  return forward(operation)
})

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
})

console.log(apolloClient)


const GET_CRONIFY_CARDS_QUERY = gql`
  query GetCronifyCards {
    cards: cronify_cards {
      id
      bank
      last4num
      card_type {
        id
        name
         icon {
           name
           description
      }  }
      provider {
        id
        name
  } } }
`;


function GetCronifyCardsQuery() {
  const { loading, error, data } = useQuery(GET_CRONIFY_CARDS_QUERY);

  console.log(loading,error,data)
  if (error) return (<p>Error : {error.message}</p>)
  if (loading) return (<p>Loading --- {error} -- {data}</p>)

  return data.cards.map(({ id, bank, provider }) => (
    <Card>
    <div key={id}>
      <h3>{bank}</h3> <br />
      <p>{provider.name}</p>
      <br />
    </div>
    </Card>
  ));
}


const Hasura = () => (
  <ApolloProvider client={apolloClient}>
    <GetCronifyCardsQuery  />
  </ApolloProvider>
 )

export default Hasura