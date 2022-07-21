import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import apiKey from './Config';

// import Components
import Nav from './Components/Nav';
import Photos from './Components/Photos';
import NotFound from './Components/NotFound';
import PhotoList from './Components/PhotoList';
import SearchForm from './Components/SearchForm';

//import component in config
export default class App extends Component {
  
  constructor() {
    super(); //lets call "this" inside the constructor
    this.state = { //collection of objects
      photos: [],
      greatdanes: [],
      lakes: [],
      trees: []
    };
  } 

  componentDidMount() { 
    // this.performanceSearch('greatdanes');
  
  }
  
  performSearch = (query = 'greatdanes') => { //fetching the data and putting in the array --> call this whenever performing a search 
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(response => { 
      console.log(this.performSearch);
        if (query === 'greatdane'){
          this.setState({ greatdane: response.data.photos.photos});         
        } else if (query === 'lakes'){
          this.setState({ lakes: response.data.photos.photos});           
        } else if (query === 'trees'){
          this.setState({ trees: response.data.photos.photos});         
         } else {
          this.setState({ photos: response.data.photos.photos});
          this.setState ({ query: query});
         }
          this.setState({loading: false});
      
        }) 
//response --> console log this response, get an array of 24 objects and gives the information for each 
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
      };

      render() { 
        console.log(this.state.photos);
        return (
          <BrowserRouter>
            <div className="container">
                <h1 className="main-title">Steph's Photo Search</h1>
                <SearchForm onSearch={this.performSearch} />      
            </div>    
            <div className="main-content">
              <PhotoList data={this.state.photos} />
            </div>
          </BrowserRouter>
        );
      }
}


<Route path='/' render={ () => <SearchForm onSearch={this.performSearch}/>} />
//https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${47fe07c047b16c73aa3906cbd27cf826}&tags=cats&per_page=24&format=json&nojsoncallback=1
//https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${47fe07c047b16c73aa3906cbd27cf826}&tags=${query}&per_page=24&format=json&nojsoncallback=1