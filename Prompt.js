import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import RoundedButton from './RoundedButton';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

// Queries
const PROMPT_QUERY = gql`
  query {
    prompt {
      title
      id
    }
  }
`;

export default function Prompt() {
  const [color, setColor] = useState('#161616');
  const { loading, data, refetch } = useQuery(PROMPT_QUERY);
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      {!loading && data && data.prompt && (
        <Text style={styles.prompt}>{data.prompt.title}</Text>
      )}
      <RoundedButton
        text="Next"
        textColor="#161616"
        backgroundColor="#d3d3d3"
        onPress={() => {
          refetch();
          setColor(randomRgb());
        }}
      />
    </View>
  );
}

// Paste this snippet inside App.js, just above the stylesheet.
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  prompt: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20
  }
});
