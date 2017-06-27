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

const API_ENDPOINT = 'https://api.cognitive.microsoft.com/bing/v5.0/images/search';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      items : [],
      buscando : false
    };
  }

  onSearchSubmit(palavraChave){
    const query = `?q=${palavraChave}&mkt=pt-br`;

    this.setState({ buscando : true });

    fetch(`${API_ENDPOINT}${query}`, {
      headers: {
        'Ocp-Apim-Subscription-Key' : '5b4eb3dd414a427ab20765d7aae66394'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({items : responseJson.value});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar onSearchSubmit = {this.onSearchSubmit.bind(this)} />
        <ImageList items={this.state.items}/>
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
