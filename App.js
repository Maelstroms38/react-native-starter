import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import Prompt from './Prompt';

const BASE_URL = 'http://localhost:4000';
const httpLink = new HttpLink({
  uri: BASE_URL
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Prompt />
    </ApolloProvider>
  );
}
