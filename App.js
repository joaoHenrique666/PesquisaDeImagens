import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './components/search_bar';
import ImageList from './components/image_list';

const ITEMS = [
  {
    id: 1,
    url: "https://media-cdn.tripadvisor.com/media/photo-s/04/03/ba/dc/pousada-praia-dos-carneiros.jpg",
    descricao: "Praia 1"
  },
  {
    id: 2,
    url: "https://media-cdn.tripadvisor.com/media/photo-s/04/03/ba/dc/pousada-praia-dos-carneiros.jpg",
    descricao: "Praia 2"
  },
  {
    id: 3,
    url: "https://media-cdn.tripadvisor.com/media/photo-s/04/03/ba/dc/pousada-praia-dos-carneiros.jpg",
    descricao: "Praia 3"
  },
  {
    id: 4,
    url: "https://media-cdn.tripadvisor.com/media/photo-s/04/03/ba/dc/pousada-praia-dos-carneiros.jpg",
    descricao: "Praia 4"
  },
  {
    id: 5,
    url: "https://media-cdn.tripadvisor.com/media/photo-s/04/03/ba/dc/pousada-praia-dos-carneiros.jpg",
    descricao: "Praia 5"
  }
]

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <ImageList items={ITEMS}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 16
  },
});
