import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import apiKey from './Config';

// import Components
import Nav from './Components/Nav';
// import Photos from './Components/Photos';
import Error from './Components/Error';
import PhotoList from './Components/PhotoList';
import SearchForm from './Components/SearchForm';
import NotFound from './Components/NotFound';


//import component in config
export default class App extends Component {
  
  constructor() {
    super(); //lets call "this" inside the constructor
    this.state = { //collection of objects
      photos: [],
      greatdane: [],
      lakes: [],
      trees: [],
      loading: true
    };
  } 
//video: giffy react course to pass props and iterate over that data map. --> ph 
  componentDidMount() { 
    this.performSearch(); //lifecycle method triggered-- default query
    this.performSearch('greatdane'); //lifecycle method triggered
    this.performSearch('lakes'); //lifecycle method triggered
    this.performSearch('trees'); //lifecycle method triggered
  
  }
  
  //fetching the data and putting in the array --> call this whenever performing a search 
  performSearch = (query = 'chairs') => { 
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(data => { 
        if (query === 'greatdane'){
          this.setState({ greatdane: data.photos.photo,
                          loading: false }); 
        } else if (query === 'lakes'){
          this.setState({ lakes: data.photos.photo,
                          loading: false });           
        } else if (query === 'trees'){
          this.setState({ trees: data.photos.photo,
                          loading: false });         
         } else {
          this.setState({ photos: data.photos.photo,
                          loading: false });
         }      
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
                <h1 className="main-title"> Steph's Fun Photo Gallery </h1>
                <SearchForm onSearch={this.performSearch} />
            <Nav/>{
          (this.state.loading)
          ? <p>Loading...</p>
            :<Switch>     
                <Route  exact path='/' render={() => <PhotoList data={this.state.photos} />} />
                <Route  exact path='/greatdane' render={() => <PhotoList data={this.state.greatdane} />} /> 
                <Route  exact path='/lakes' render={() => <PhotoList data={this.state.lakes} />} /> 
                <Route  exact path='/trees' render={() => <PhotoList data={this.state.trees} />} />
                <Route  exact path='/search/:query' render={() => <PhotoList data={this.state.photos} />} />    
                <Route  exact path='/*' render={() => <NotFound />} />  
                <Route  component={Error} />  
                

            </Switch>
            }

        
            </div> 
          </BrowserRouter>
        );
      }   
}