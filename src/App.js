import React from 'react';
import { Route, NavLink } from 'react-router-dom';

//import component in config
import apiKey from './Config';


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

