import gql from 'graphql-tag'
import React from 'react'
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import { Query, useQuery, ApolloProvider } from 'react-apollo'


// This setup is only needed once per application;
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://cronify.hasura.app/v1/graphql',
    credentials: 'include',
    headers: {
     authorization: 'Bearer ' + localStorage.getItem('hasuraToken'),
     'x-hasura-role': 'cronify'
    }
  }),
});

console.log(apolloClient);


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
         }
      }
      provider {
        id
        name
      }
    }
  }
`;

function GetCronifyCardsQuery_ORIG (props) {
  return (
    <Query
      query={GET_CRONIFY_CARDS_QUERY} >
      {({ loading, error, data }) => {
        
        if (error)
          return (
            <pre>
              Error in GET_CRONIFY_CARDS_QUERY
              {JSON.stringify(error, null, 2)}
            </pre>
          );
         if (loading) return <pre>Loadingo..!</pre>
        if (data) {
          return (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          )
        }
      }}
    </Query>
  )
}


function GetCronifyCardsQuery() {
  const { loading, error, data } = useQuery(GET_CRONIFY_CARDS_QUERY);

  console.log(loading,error,data)
  if (error) return (<p>Error : {error.message}</p>)
  if (loading) return (<p>Loading...useQc --- {error} -- {data}</p>)

  return data.cards.map(({ id, bank, provider }) => (
    <div key={id}>
      <h3>{bank}</h3> <br />
      <p>{provider.name}</p>
      <br />
    </div>
  ));
}

export default () => (
  <ApolloProvider client={apolloClient}>
    <GetCronifyCardsQuery  />
  </ApolloProvider>
 )

