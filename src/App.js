import React from 'react';
import { Route, NavLink } from 'react-router-dom';

//for later[]
import axios from 'axios';
import SearchForm from './Components/SearchForm';

//import component in config
import apiKey from './Config';

//adding search bar
performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          gifs: response.data.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }



componentDidMount() ;{
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
    //   .then(responseData => {
    //     this.setState({ gifs: responseData.data });
    //   })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

